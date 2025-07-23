// Import packages

require("dotenv").config();
var express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

// Create new bot instance to client
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); //Guild intent allows access to server/guild info

const serverId = process.env.DISCORD_CHANNEL_ID;

// Function to fetch serverID and message being sent
async function sendToDisc(message, channelId = serverId) {
  // try catch function
  try {
    const channel = await client.channels.fetch(channelId);
    await channel.send(message);
    console.log(`Message sent to ${channelId}`);
  } catch (error) {
    console.error(`Failed to send message: ${error}`);
  }
}

// Login the bot to discord using it's token
client.login(process.env.BOT_TOKEN_DISCORD)

// Listener to when client is ready
client.on('ready', () => {
    console.log(client.user.tag);

    // call function to send message
    sendToDisc('Bot is triggered');

    // Log all guilds (servers) the bot is in with their names and IDs
    console.log(client.guilds.cache.map(g => `${g.name} (${g.id})`).join('\n'));
})

module.exports = { sendToDisc }