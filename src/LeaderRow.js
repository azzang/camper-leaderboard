import React, { Component } from 'react';
import './LeaderRow.css';

class LeaderRow extends Component {
  render() {
    return (
      <tr className="leader">
        <td>{this.props.rank}</td>
        <td>
          <a href={`https://www.freecodecamp.com/${this.props.username}`}>
            <img src={this.props.img} alt={this.props.username} className="img-thumbnail" />
            {this.props.username}
          </a>
        </td>
        <td>{this.props.recent}</td>
        <td>{this.props.alltime}</td>
      </tr>
    );
  }
}

export default LeaderRow;
