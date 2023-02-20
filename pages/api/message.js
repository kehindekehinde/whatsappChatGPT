import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openAI = new OpenAIApi(configuration);
export default async function handler(req, res) {
  const MessagingResponse = require("twilio").twiml.MessagingResponse;
  var messageResponse = new MessagingResponse();
  const sentMessage = req.body.Body || "";
  let replyToBeSent = "";
  if (sentMessage.trim().length === 0) {
    replyToBeSent = "We could not get your message. Please try again";
  } else {
    try {
      const completion = await openAI.createCompletion({
        model: "text-davinci-003", // required
        prompt: req.body.Body, // completion based on this
        temperature: 0.6, //parameter that determine how confident the bot is.1 high,0 low
        n: 1,
        max_tokens: 50, //no of words in the prompt
        // stop: "."
      });
      replyToBeSent = completion.data.choices[0].text;
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        replyToBeSent = "There was an issue with the server";
      } else {
        // error getting response
        replyToBeSent = "An error occurred during your request.";
      }
    }
  }
  messageResponse.message(replyToBeSent);
  // send response
  res.writeHead(200, {
    "Content-Type": "text/xml",
  });
  res.end(messageResponse.toString());
}

// create an API route to handle the incoming request (web hook) when user sends a message from
// WhatsApp.

// export default function handler(req, res) {
//     const MessagingResponse = require('twilio').twiml.MessagingResponse;
//     var messageResponse = new MessagingResponse();
//     messageResponse.message('Reply goes here');
//     // send response
//     res.writeHead(200, {
//     'Content-Type': 'text/xml'
//     });
//     res.end(messageResponse.toString());
//     }

// from Twilio console to send/reply inbound message coming from whatsapp
//     const accountSid = 'AC9253c2f02a50c5b44f0daf1f61470662';
// const authToken = '[AuthToken]';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//       .create({
//          body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.',
//          from: 'whatsapp:+14155238886',
//          to: 'whatsapp:+2349135215857'
//        })
//       .then(message => console.log(message.sid))
//       .done();
