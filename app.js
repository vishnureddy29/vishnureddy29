const { App } = require('@slack/bolt');
const Slack_Token = "";
const Slack_Secret = "";
const client_Id = "";
const client_Secret = "";

const app = new App({
    token:Slack_Token,
    signingSecret: Slack_Secret,
    clientId:client_Id,
    clientSecret: client_Secret,
    appToken: '',
    
    
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
