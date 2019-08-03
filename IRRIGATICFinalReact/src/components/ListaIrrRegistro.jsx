import React from 'react';

import '../App.css';

class ListaIrrRegistro extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          {/* <br />@{this.props.badge.twitter} */}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class ListaIrrigatic extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <ListaIrrRegistro badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListaIrrigatic;
