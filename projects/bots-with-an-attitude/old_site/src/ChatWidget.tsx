import { useEffect, useState } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import useWebSocket from "react-use-websocket";

import "react-chat-widget/lib/styles.css";

const tunnelUrl = "myawesomebot.localtunnel.me";
const localUrl = "localhost:3000";

const ChatWidget = (props: any) => {
  const url = `ws://${tunnelUrl}/api/messages`;
  const [history, updateHistory] = useState([]);
  const [sendMessage, lastMessage, readyState] = useWebSocket(`${url}`);

  useEffect(() => {
    if (readyState !== 0) {
      sendMessage(JSON.stringify({ type: "join", text: "", user: "123" }));
    }
  }, [readyState]);

  useEffect(() => {
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      updateHistory([message, ...history]);
      addResponseMessage(message.text);
    }
  }, [lastMessage]);

  const handleNewUserMessage = async (message: string) => {
    const payload = {
      type: "message",
      text: message,
      user: "123"
    };
    sendMessage(JSON.stringify(payload));
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      autofocus={true}
      {...props}
    />
  );
};

export default ChatWidget;
