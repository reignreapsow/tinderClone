import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";
function ChatScreen() {
  //keeps track of what goes in the input field
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      /* dummy data*/
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Whats Up",
    },
    {
      /* dummy data*/
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Hows it going",
    },
    {
      /* dummy data*/
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Whats Up",
    },
    {
      /* dummy data*/
      message: "Whats Up",
    },
  ]);

  const handleSend = (e) => {
    //prevents whole refresh
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <h2>Chat screen</h2>
      <p className="chatScreen__timestamp">
        {" "}
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        /* (IF message includes name) ? (use this) : else (use this) */
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            {/* <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            /> */}
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          className="chatScreen_inputBtn"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
