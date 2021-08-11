import { UserStoredInContext } from "../hooks/UserContext.js";
import Loading from './Loading.js';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';

function LandingPage(){
  const {user, isLoading} = useContext(UserStoredInContext);
  if(isLoading) {
    return (
      <Loading/>
    );
  }
  if({user}){
    return (
      <Redirect to="/profile"/>
    );
  }
  else {
    return (<Redirect to='/login'/>);
  }
}
export default LandingPage;
