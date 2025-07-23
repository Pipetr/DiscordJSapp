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
async function sendToDisc(message, channelId = serverId) {
  console.log(`[SEND ATTEMPT] Trying to send: "${message}" to channel ${channelId}`);
  try {
    if (!isReady) throw new Error("Bot not connected to Discord");
    if (!message?.trim()) throw new Error("Message is empty");

    const channel = await client.channels.fetch(channelId);
    console.log(`[CHANNEL] Found: ${channel.name} (${channel.id})`);

    const sentMessage = await channel.send(message);
    
    return { success: true, messageId: sentMessage.id };
  } catch (error) {
    console.error("[FAILED]", error.message);
    throw error; // Re-throw for route handler
  }
}

module.exports = { sendToDisc };
