import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import About from "./components/layout/About";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEducation";
import Profiles from "./components/profile/Profiles";
import Profile from "./components/profile-individ/Profile";
import Posts from "./components/forum/Posts";
import Post from "./components/post/Post";

import NotFound from "./components/layout/NotFound";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: React.FC = () => {
  // Passing in [] so it only runs once, similar to ComponentDidMount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar />

          <Alert />
          
          <section className="container">
            <Switch>
            <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/about" component={About} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/create-profile" component={CreateProfile} />
              <Route exact path="/edit-profile" component={EditProfile} />
              <Route exact path="/add-experience" component={AddExperience} />
              <Route exact path="/add-education" component={AddEducation} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/post/:id" component={Post} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
