import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trunfo extends Component {
  render() {
    const { checked, onInputChange } = this.props;
    return (
      <label htmlFor="name-imput">
        Super Trybe Trunfo
        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ checked }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Trunfo.propTypes = {
  checked: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Trunfo;
