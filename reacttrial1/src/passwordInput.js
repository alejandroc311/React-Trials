import React from 'react';
import ReactDOM from 'react-dom';

class PasswordInput extends React.Component{
  constructor(props){
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(event){
    this.props.onInputChange(event.target.name, event.target.value);
    console.log(event.target.value);
  }

  render(){
    const password = this.props.password;
    return(
      <div className="row">
        <div className="col-6 offset-3 col-sm-6 offset-sm-3 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xxl-2 offset-xxl-5">
          <label for="passwordInput" className="form-label">Password</label>
          <input password={password} name="password" onChange={this.handleUserInput} type="password" className="form-control" id="passwordInput"></input>
        </div>
      </div>
    );
  }

}
export default PasswordInput;
