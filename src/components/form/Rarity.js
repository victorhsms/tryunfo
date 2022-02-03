import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rarity extends Component {
  render() {
    const { name, id, values, value, onInputChange } = this.props;
    return (
      <select
        name={ name }
        data-testid={ id }
        value={ value }
        onChange={ onInputChange }
      >
        { values.map((unity) => (
          <option key={ unity } value={ unity }>
            { unity }
          </option>))}
      </select>
    );
  }
}

Rarity.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Rarity;
