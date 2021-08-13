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
    console.log("Inside empty User Object in Landing Page");
    return (
      <Redirect to="/login"/>
    );
  }
  else if(user){
    console.log("Inside found User Object in Landing Page");
    return (<Redirect to='/profile'/>);
  }
}
export default LandingPage;
