import puppeteer, { ElementHandle, Page } from "puppeteer";
import { config } from "dotenv";
import { executeCommand } from "./soundboard-commands";
config();

// Constants
const OBSERVE_INTERVAL_IN_MS = 5000;
const CHAT_SELECTOR =
  '.restream-embed-themes-chat-container .message-item:not([data-processed="true"])';

interface IMessage {
  text: string;
  imageUrl: string;
  username: string;
}

const COMMAND_PATTERN = /^!/;

async function parseMessage({ text, imageUrl, username }: IMessage) {
  if (COMMAND_PATTERN.test(text)) {
    console.log({ imageUrl, text, username });
    executeCommand(text.trim());
  }
}

async function extractMessageData(
  page: Page,
  element: ElementHandle
): Promise<IMessage> {
  const message = await element.evaluate((el) => {
    const imageEl = el.querySelector('[alt="avatar"]') as HTMLImageElement;
    const usernameEl = el.querySelector(
      ".MuiTypography-subtitle2"
    ) as HTMLDivElement;
    const textEl = el.querySelector(".chat-text-normal");

    return {
      imageUrl: imageEl?.src || "",
      username: usernameEl?.textContent || "",
      text: textEl?.textContent || "",
    };
  });

  // Mark the message as processed
  await element.evaluate((el) => {
    el.setAttribute("data-processed", "true");
  });

  return message;
}

async function observeMessages(page: Page) {
  setInterval(async () => {
    try {
      const messageElements = await page.$$(CHAT_SELECTOR);
      console.log({ messageElements });

      for (const element of messageElements) {
        const message = await extractMessageData(page, element);
        await parseMessage(message);
      }
    } catch (error) {
      console.error("Error processing messages:", error);
    }
  }, OBSERVE_INTERVAL_IN_MS);
}

async function main() {
  const browser = await puppeteer.launch({
    headless: !!process.env.HEADLESS_MODE, // Set to true in production
  });

  const page = await browser.newPage();

  // Navigate to your Restream chat page
  await page.goto(process.env.RESTREAM_CHAT_LINK || "");

  // Start observing messages
  await observeMessages(page);

  // Handle cleanup on process termination
  process.on("SIGINT", async () => {
    await browser.close();
    process.exit();
  });
}

main().catch(console.error);
