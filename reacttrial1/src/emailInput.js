import React from 'react';
import ReactDOM from 'react-dom';
//import './form.css';


class EmailInput extends React.Component{
  constructor(props){
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);

  }

  handleUserInput(event){
    this.props.onInputChange(event.target.name, event.target.value);
    console.log(event.target.value);
  }
  render(){
    const email = this.props.email;
    const isValid = this.props.isValid;
    //const isValid = this.props.isValid;
    return(
      <div className="row">
        <div className="col-6 offset-3 col-sm-6 offset-sm-3 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xxl-2 offset-xxl-5">
          <label for="emailInput" className="form-label">Email</label>
          <input email={this.props.email} name="email" onChange={this.handleUserInput} type="email" className="form-control" id="emailInput"></input>
        </div>
      </div>
    );
  }
}

export default EmailInput;
