import { useState } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

const sendMessage = async (message: string) => {
  const resp = await fetch("http://localhost:3000/api/messages", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: "message",
      text: message,
      user: "123"
    })
  });
  return await resp.json();
};

type Resp = { text: string };

const ChatWidget = (props: any) => {
  const [responsesList, updateResponsesList] = useState([]);
  const handleNewUserMessage = async (message: string) => {
    const responses = await sendMessage(message);
    responses.forEach((resp: Resp) => {
      updateResponsesList(resps => [resp, ...resps]);
      addResponseMessage(resp.text);
    });
  };

  console.log(responsesList);

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      autofocus={true}
      {...props}
    />
  );
};

export default ChatWidget;
