# ReStreamBot 🤖

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D%2020.16.0-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-%5E5.0.0-blue)

A Node.js bot that connects to Restream chat and triggers Voicemod sound effects based on chat commands (using HotKeys/Custom Keybinds).

## 🎯 Features

- 🤖 Automated chat monitoring using Puppeteer
- 🎵 Trigger Voicemod sound effects via chat commands
- 🔄 Real-time message processing
- 🛡️ TypeScript for type safety

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.16.0 or higher)
- npm
- Voicemod installed with configured hotkeys
- Restream chat link

### Installation

1. Clone the repository: 
```bash
git clone https://github.com/ahsanayaz/streambot-node.git
```
2. Install dependencies
```bash
npm install
```
3. Create a `.env` file in the root directory:
```env
RESTREAM_CHAT_LINK=your_restream_chat_link_here
```
4. Start the bot:
```bash
npm start
```


## 💬 Chat Commands

Current supported commands:
- `!dontredeem` - Triggers don't redeem sound
- `!sad` - Triggers sad sound
- `!clap` - Triggers clapping sound
- `!pfft` - Triggers fart sound
- `!scream` - Triggers scream sound

## 🛠️ Tech Stack

- TypeScript
- Puppeteer (for chat scraping)
- RobotJS (for keyboard automation)
- Node.js

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⚠️ Disclaimer

This bot is intended for entertainment purposes during streams. Make sure to comply with Restream's and Voicemod's terms of service when using this bot.