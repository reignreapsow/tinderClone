import React from "react";
import Chat from "./Chat.js";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        /* dumby values */
        name="Mark"
        message="YO whats up!"
        timestamp=" 4 seconds ago"
        profilePic="..."
      />
      <Chat
        /* dumby values */
        name="Sarah"
        message="whats up!"
        timestamp=" 5 seconds ago"
        profilePic="https://images.unsplash.com/photo-1506795660198-e95c77602129?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      />
      <Chat
        /* dumby values */
        name="Ellen"
        message="YO whats up!"
        timestamp=" 10 seconds ago"
        profilePic="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Chat
        /* dumby values */
        name="Sandra"
        message="Ola!"
        timestamp=" 44 seconds ago"
        profilePic="https://images.unsplash.com/photo-1596636222220-dfb7071e3676?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
      />
      <Chat
        /* dumby values */
        name="Natasha"
        message="YO!"
        timestamp=" 4 seconds ago"
        profilePic="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      />
    </div>
  );
}

export default Chats;
