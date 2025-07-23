// Import packages

require("dotenv").config();
var express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

// Create new bot instance to client
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages], //Guild intent allows access to server/guild info
});

const serverId = process.env.DISCORD_CHANNEL_ID;
let isReady = false;

// Login the bot to discord using it's token
client.login(process.env.BOT_TOKEN_DISCORD);

// Listener to when client is ready
client.on("ready", () => {
  isReady = true;
  // Debugging if client is ready
  console.log(`✅ ${client.user.tag} ready`);
});

// Function to fetch serverID and message being sent
async function sendToDisc(message, channelId = serverID) {
  if (!isReady) throw new Error("Bot not connected yet");

  const channel = await client.channels
    .fetch(channelId);
  return channel.send(message);
}

module.exports = { sendToDisc };
