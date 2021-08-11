import React from 'react';
import ReactDOM from 'react-dom';
import FunctionalEmailInput from "./functionalEmailInput.js"
import FunctionalPasswordInput from "./functionalPasswordInput.js"
import FunctionalButton from "./functionalButton.js"
import $ from 'jquery';
import { UserStoredInContext } from "../hooks/UserContext.js";
import Loading from './Loading.js';
import { Redirect } from 'react-router-dom';
import ProfilePage from "./profilePage.js"
import { createContext, useContext } from 'react';
function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);
  const {user, setUser, isLoading} = useContext(UserStoredInContext);
  React.useEffect(() => {console.log(email); isFormSubmittable()}, [email, password, isFormValid]);

  function handleInputChange(name, value) {
      name == "email" ? setEmail(value) : setPassword(value)
  }

  function isFormSubmittable(){
    var regexEmailCheck = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regexEmailCheck.test(email)) {
      setIsFormValid(true);
    }
    else {
      setIsFormValid(false);
    }
  }

  function sendCookieOnSubmit(event){
    event.preventDefault();
    console.log("Entered sendCookie function.");
    const payload = {
      email: email,
      password: password
    };
    fetch("https://flpnmoyvhe.execute-api.us-east-1.amazonaws.com/platformTesting/cookiecheck", {
        method: "POST",
        credentials: "include",
        mode:"cors",
        body: JSON.stringify(payload),
        headers:{

        }
    })
    .then(serverResponse => serverResponse.json())
    .then(parsedData => {
      console.log("Fetch API Reached Lambda in Gateway and returned this response: ", parsedData);
      setUser({parsedData});
      alert(parsedData);
      console.log("inside login page function", user);
    })
    .catch(error => {
      console.log("Fetch API failed and returned this error:", error);
    });
  }



  return (
    <form onSubmit={e => sendCookieOnSubmit(e)}>
      <FunctionalEmailInput email={email} onInputChange={handleInputChange} />
      <FunctionalPasswordInput password={password} onInputChange={handleInputChange}/>
      <FunctionalButton isButtonEnabled={isFormValid} />
    </form>
  );
}

export default LoginPage;
