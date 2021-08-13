import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserStoredInContext } from "../hooks/UserContext.js";
import Loading from './Loading.js';

function PrivateRoute(props){
  const {user, isLoading, setLoading} = useContext(UserStoredInContext);
  const { component: Component, ...rest } = props;
  if(isLoading) {
    return (
      <Loading/>
    );
  }

  else if(Object.keys(user).length === 0){
    return(
      <Redirect to="/login"/>
    );
  }
  else if(user) {
    return (
        <Route {...rest} render={(props) => (<Component {...props}/>)}/>
      );
    }
}
export default PrivateRoute;
