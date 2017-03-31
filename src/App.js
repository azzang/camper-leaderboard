import React, { Component } from 'react';
import LeaderTable from './LeaderTable';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <LeaderTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
