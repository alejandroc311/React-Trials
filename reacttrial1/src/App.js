import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from "./components/functionalForm.js";
import reportWebVitals from './reportWebVitals';
import useGetUser from "./hooks/useGetUser.js";
import { UserStoredInContext } from './hooks/UserContext';
import PrivateRoute from "./components/privateRoute.js";
import LandingPage from "./components/landingPage.js";
import ProfilePage from "./components/profilePage.js";

function App(){
  const {user, setUser, isLoading} = useGetUser();
  console.log("Inside App Function/Component", user);
    return(

      <Router>
      <UserStoredInContext.Provider value={{user, setUser, isLoading}}>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/login" component={LoginPage}/>
            <PrivateRoute path="/profile" component={ProfilePage}/>
            </Switch>
        </UserStoredInContext.Provider>
      </Router>

    );
}

export default App;
