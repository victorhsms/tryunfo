import React, { Component } from 'react';

class Trunfo extends Component {
  render() {
    return (
      <label htmlFor="name-imput">
        Super Trybe Trunfo
        <input
          type="checkbox"
          data-testid="trunfo-input"
        />
      </label>
    );
  }
}

export default Trunfo;
