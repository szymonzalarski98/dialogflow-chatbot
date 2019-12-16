import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';
import cuid from 'cuid';

const Chat: React.SFC = () => {
  const [sessionId, setSessionId] = React.useState(cuid());
  React.useEffect(() => {
    addResponseMessage('Witam, w czym mogę Ci pomóc?');
  });
  const url = 'https://api.dialogflow.com/v1/query?v=20150910';
  const handleNewUserMessage = async (message: string) => {
    let messageObject = {
      'lang': 'pl',
      'query': message,
      'sessionId': sessionId,
      'timezone': 'America/New_York',
    };
    axios({
      method: 'post',
      url: url,
      data: messageObject,
      headers: {
        'Authorization': 'Bearer 1c99baa55a7f40ce8a454da11438c5ce',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => addResponseMessage(response.data.result.fulfillment.speech))
  }
  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Simple Dialogflow Bot"
      subtitle="Made with ❤️ by Szymon Zalarski"
      psenderPlaceHolder="Send a message..."
      badge={0}
    />
  )
}

export default Chat;