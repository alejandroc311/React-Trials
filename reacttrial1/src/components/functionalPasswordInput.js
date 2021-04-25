import React from 'react';
import ReactDOM from 'react-dom';

function FunctionalPasswordInput(props){
  function handleUserInput(event){
    props.onInputChange(event.target.name, event.target.value);
  }

  return (
    <div className="row">
      <div className="col-6 offset-3 col-sm-6 offset-sm-3 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xxl-2 offset-xxl-5">
        <label for="passwordInput" className="form-label">Password</label>
        <input password={props.password} name="password" onChange={handleUserInput} type="password" className="form-control" id="passwordInput"></input>
      </div>
    </div>
  );
}
export default FunctionalPasswordInput;
