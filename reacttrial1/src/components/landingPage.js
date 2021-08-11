import { UserStoredInContext } from "../hooks/UserContext.js";
import Loading from './Loading.js';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';

function LandingPage(){
  const {user, isLoading} = useContext(UserStoredInContext);
  if(isLoading) {
    console.log("Inside true isLoading Check");

    return (
      <Loading/>
    );
  }
  else if(Object.keys(user).length === 0){
    console.log("Inside true for User Object Check");
    return (
      <Redirect to="/login"/>
    );
  }
  else if(user){
    console.log("Inside nothing was True");
    return (<Redirect to='/profile'/>);
  }
}
export default LandingPage;
