declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RESTREAM_CHAT_LINK: string;
      HEADLESS_MODE: boolean;
    }
  }
}

export {};
