import React from 'react';
import ReactDOM from 'react-dom';
import EmailInput from './emailInput.js';
import PasswordInput from "./passwordInput.js";
import ButtonComponent from "./buttonComponent.js";
import $ from 'jquery';


class FormContainer extends React.Component{
  constructor(props){
    super(props);
    this.isFormValid = this.isFormValid.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {email:'', password:'', isFormValid:false};

  }
    onInputChange(name, value){
      var formInfo = {};
      formInfo[name] = value;
      this.setState(formInfo, () => {
        console.log("Updated State: ", formInfo);
      });
    }
    isFormValid(){
      var regexEmailCheck = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (regexEmailCheck.test(this.state.email)) {
        this.setState({
          isFormValid: true},
          () => {
          console.log("isUserValid Function State: ", this.state.email);
          console.log("Email is valid");
        });
      }
      else {
        this.setState({
          isFormValid: false},
          () => {
          console.log("isUserValid Function State: ", this.state.email);
          console.log("Email is invalid");
        });
      }
    }
  render(){
    const email = this.state.email;
    const password = this.state.password;
    const isFormValid = this.state.isFormValid;
    const payload = {email: email, password: password, isFormValid: isFormValid};
    console.log(payload);
    return(
      <div onChange={this.isFormValid}>
        <EmailInput email={email} onInputChange={this.onInputChange} />
        <PasswordInput password={password} onInputChange={this.onInputChange} />
        <ButtonComponent isButtonEnabled={isFormValid} />
      </div>
    );
  }
}

export default FormContainer;
