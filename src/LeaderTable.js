import React, { Component } from 'react';
import LeaderRow from './LeaderRow';
import './LeaderTable.css';

class LeaderTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      timeHorizon: ''
    };
  }

  componentDidMount() {
    this.fetchLeaders('recent');
  }

  fetchLeaders(timeHorizon) {
    if (timeHorizon !== this.state.timeHorizon) {
      window.axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${timeHorizon}`)
      .then((response) => {
        this.setState({ data: response.data, timeHorizon });
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  compareLeaders(a, b) {
    return b[this.state.timeHorizon] - a[this.state.timeHorizon];
  }

  getLeaderRow(leader, index) {
    return <LeaderRow key={index} rank={index + 1} {...leader} />;
  }

  getLeaderRows() {
    return this.state.data.sort(this.compareLeaders.bind(this)).map(this.getLeaderRow.bind(this));
  }

  render() {
    return (
      <table className="table table-bordered leaders">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th>
              <button type="button" className="btn btn-link" onClick={this.fetchLeaders.bind(this, 'recent')}>Points in last 30 days</button>
            </th>
            <th>
              <button type="button" className="btn btn-link" onClick={this.fetchLeaders.bind(this, 'alltime')}>All time points</button>
            </th>
          </tr>
        </thead>
        <tbody>{this.getLeaderRows()}</tbody>
      </table>
    );
  }
}

export default LeaderTable;
