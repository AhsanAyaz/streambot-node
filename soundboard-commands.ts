import robot from "robotjs";

type Hotkey = {
  modifiers: string[];
  key: string;
};

type SoundEffect = {
  command: string;
  hotkey: Hotkey;
  description: string;
};

function simulateHotkey({ modifiers, key }: Hotkey) {
  console.log(`Triggering hotkey: ${modifiers.join("+")}+${key}`);
  modifiers.forEach((m) => robot.keyToggle(m, "down"));
  robot.keyTap(key);
  modifiers.forEach((m) => robot.keyToggle(m, "up"));
  console.log(`Triggered hotkey: ${modifiers.join("+")}+${key}`);
}

export const SOUND_EFFECTS: SoundEffect[] = [
  {
    command: "!dontredeem",
    hotkey: { modifiers: ["control", "alt"], key: "1" },
    description: "Don't redeem that!",
  },
  {
    command: "!sad",
    hotkey: { modifiers: ["control", "alt"], key: "2" },
    description: "Sad trombone sound",
  },
  {
    command: "!pfft",
    hotkey: { modifiers: ["control", "alt"], key: "3" },
    description: "Pfft sound",
  },
  {
    command: "!clap",
    hotkey: { modifiers: ["control", "alt"], key: "5" },
    description: "Clapping sound",
  },
  {
    command: "!scream",
    hotkey: { modifiers: ["control", "alt"], key: "4" },
    description: "Screaming sound",
  },
];

export function executeCommand(command: string): void {
  const effect = SOUND_EFFECTS.find((effect) => effect.command === command);
  if (effect) {
    simulateHotkey(effect.hotkey);
  }
}
