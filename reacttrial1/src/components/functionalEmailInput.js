import React from 'react';
import ReactDOM from 'react-dom';

function FunctionalEmailInput (props) {
  function handleUserInput(event){
    props.onInputChange(event.target.name, event.target.value);
  }
  return (
    <div className="row">
      <div className="col-6 offset-3 col-sm-6 offset-sm-3 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xxl-2 offset-xxl-5">
        <label for="emailInput" className="form-label">Email</label>
        <input email={props.email} name="email" onChange={handleUserInput} type="email" className="form-control" id="emailInput"></input>
      </div>
    </div>
  );
}

export default FunctionalEmailInput;
