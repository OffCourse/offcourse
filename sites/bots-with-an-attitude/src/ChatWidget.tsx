import { useState, useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

const ChatWidget = (props: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    addResponseMessage("HELLO THERE");
  }, []);

  const handleNewUserMessage = (message: string) => {
    setCount(count => count + 1);
    addResponseMessage("true!");
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      badge={count}
      autofocus={true}
      {...props}
    />
  );
};

export default ChatWidget;
