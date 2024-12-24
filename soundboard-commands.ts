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
  modifiers.forEach((m) => robot.keyToggle(m, "down"));
  robot.keyTap(key);
  modifiers.forEach((m) => robot.keyToggle(m, "up"));
  console.log(`Triggered hotkey: ${modifiers.join("+")}+${key}`);
}

export const SOUND_EFFECTS: SoundEffect[] = [
  {
    command: "!dontredeem",
    hotkey: { modifiers: ["alt"], key: "f1" },
    description: "Don't redeem that!",
  },
  {
    command: "!sad",
    hotkey: { modifiers: ["alt"], key: "f2" },
    description: "Sad trombone sound",
  },
  {
    command: "!pfft",
    hotkey: { modifiers: ["alt"], key: "f3" },
    description: "Pfft sound",
  },
  {
    command: "!clap",
    hotkey: { modifiers: ["alt"], key: "f4" },
    description: "Clapping sound",
  },
  {
    command: "!scream",
    hotkey: { modifiers: ["alt"], key: "f5" },
    description: "Screaming sound",
  },
];

export function executeCommand(command: string): void {
  const effect = SOUND_EFFECTS.find((effect) => effect.command === command);
  if (effect) {
    simulateHotkey(effect.hotkey);
  }
}
