import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserStoredInContext } from "../hooks/UserContext.js";
import Loading from './Loading.js';

function PrivateRoute(props){
  const {user, isLoading} = useContext(UserStoredInContext);
  const { component: Component, ...rest } = props;
  if(isLoading) {
    return (
      <Loading/>
    );
  }
  if({user}){
    return (
      <Route {...rest} render={(props) => (<Component {...props}/>)}/>
    );
  }
  else {
    return (
      <Redirect to='/login'/>
    );
  }
}
export default PrivateRoute;
