import React from 'react';

import './app.css';

class App extends React.Component{
  render(){
    return (
      <div>
        <IndexContainer/>
      </div>
    );
  }
}

class IndexContainer extends React.Component{
  render(){
    return(
        <div className="container-fluid overflow-hidden no-gutters indexContainer">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <h1 className="indexContainerH1Tag">Content inside Card</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <h1 className="indexContainerH1Tag">Content inside Card</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <h1 className="indexContainerH1Tag">Content inside Card</h1>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
