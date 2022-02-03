import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trunfo extends Component {
  render() {
    const { checked, message, id, onInputChange, name } = this.props;
    return (
      <label htmlFor="name-imput">
        { message }
        <input
          name={ name }
          type="checkbox"
          data-testid={ id }
          checked={ checked }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Trunfo.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Trunfo;
