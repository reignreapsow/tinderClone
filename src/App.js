import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from './Chats.js';
import ChatScreen from './ChatScreen.js';


import './App.css';
/*
  :person === wildcard
  wildcard means any value can swap with :person

  /chat/:person
  /chat/ellen
*/
function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            {/* <Chats /> */}
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

        /* Header */
        /* Material UI (for Icons) */
        
        /* Tinder Cards */
        /* Buttons below Tinder Cards */
        /* Chats Screen */
        /* Individual chat screen */