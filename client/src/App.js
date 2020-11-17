import React, { useEffect } from "react";
import HOC from "./components/hoc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  HomePage,
  DevPage,
  FollowingPage,
  PhotoPage,
  TopicPage,
  ProfilePage,
  SignUpPage,
  LoginPage,
} from "./components/views";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HOC(HomePage)} />
          <Route exact path="/developers" component={HOC(DevPage)} />
          <Route exact path="/following" component={HOC(FollowingPage)} />
          <Route exact path="/signup" component={HOC(SignUpPage)} />
          <Route exact path="/login" component={HOC(LoginPage)} />
          <Route path="/:username" component={HOC(ProfilePage)} />
          <Route path="/photos/:photoId" component={HOC(PhotoPage)} />
          <Route path="/t/:topicId" component={HOC(TopicPage)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
