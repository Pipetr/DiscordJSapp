# DicordJSapp
Create a review bot using discord.

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Discord bot token and
    MongoDB connection string:
    ```env
    DISCORD_TOKEN=your_discord_bot_token
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the bot:
    ```bash
    npm start
    ```
5. Make sure to have a MongoDB instance running and accessible via the connection string provided in the `.env` file.

6. Once the applications starts, you will see a landing page with a form where you have to enter you name, email and the review you want to submit. Once you are done, click on the submit button and the review will be sent to the Discord channel.


