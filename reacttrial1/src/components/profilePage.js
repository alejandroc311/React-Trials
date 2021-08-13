import React from 'react';
import ReactDOM from 'react-dom';
import { UserStoredInContext } from "../hooks/UserContext.js";
import { useContext } from 'react';
import Loading from './Loading.js';
import { Redirect } from 'react-router-dom';

function ProfilePage(){
  const {user, isLoading, setLoading} = useContext(UserStoredInContext);
  if (isLoading){
    return(
      <Loading/>
    );
  }

  console.log("Inside Profile Component Function", user);
  if(Object.keys(user).length === 0){
    setLoading(true);
    return(<Redirect to="/login"/>);
  }
  else if(user){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div>This is the user id {{user}.user.userid}</div>
            <div>This is the user email {{user}.user.email} </div>
            <div>This is the user username {{user}.user.username}</div>
          </div>
        </div>
      </div>
    );
  }
  //console.log("Contest Test", {user}.user.userid);
}

export default ProfilePage;
