import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

function FunctionalButton(props){
  if(props.isButtonEnabled == true){
    $(".btn").attr("disabled", false);
  }
  else{
    $(".btn").attr("disabled", true);
  }

  return(
    <div className="row">
      <div className="col-6 offset-3 col-sm-6 offset-sm-3 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xxl-2 offset-xxl-5" >
        <button disabled type="submit" className="btn btn-success">Submit</button>
      </div>
    </div>
  );
}

export default FunctionalButton;
