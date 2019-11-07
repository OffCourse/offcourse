import { useEffect, useState } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import useWebSocket from "react-use-websocket";

import "react-chat-widget/lib/styles.css";

const ChatWidget = (props: any) => {
  const url = "ws://localhost:3000/api/messages";
  const [history, updateHistory] = useState([]);
  const [sendMessage, lastMessage, readyState] = useWebSocket(`${url}`);
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
