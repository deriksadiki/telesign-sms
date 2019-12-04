var TeleSignSDK = require('telesignsdk');

const customerId = "FC8BD86C-83AC-4A55-8F26-8FB5180A886E";
const apiKey = "Dgy6JsHHYxu8IhOjZ0JmTcwegz4GiAWSyS8mnE+Yf9En9HCjmhPY5a1oaeet6Fqg+zGjokWz7IC9r5nFrJa7+w==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
);

const phoneNumber =0818721212;
const message = "You're scheduled for a dentist appointment at 2:30PM.";
const messageType = "ARN";

function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);
