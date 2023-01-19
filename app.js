const { App } = require('@slack/bolt');
const Slack_Token = "xoxb-4309318629062-4579754242086-7M0t2kKs4QnthJW69wa0FrNA";
const Slack_Secret = "c21e9d948a1b5b61acd753fad992ef40";
const client_Id = "4309318629062.4583401428949";
const client_Secret = "75bd1132965c33f574de3a3c19c0e87d";

const app = new App({
    token:Slack_Token,
    signingSecret: Slack_Secret,
    clientId:client_Id,
    clientSecret: client_Secret,
    appToken: 'xapp-1-A04H5BTCLTX-4579767530822-2dc98d2dcc1538b5c9e3b690eb19db4e541096fab3b182df5e9ddef09ba4da28',
    
    
    // you still need to listen on some port!
    
});
  
  // Listens to incoming messages that contain "hello"
  app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
  });
  
  (async () => {
    // Start your app
    await app.start();
  
    console.log('⚡️ Bolt app is running!');
  })();