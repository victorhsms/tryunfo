import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rarity extends Component {
  render() {
    const { name, values } = this.props;
    return (
      <select
        name={ name }
        data-testid="rare-input"
      >
        <option value={ values[0] }>
          { values[0] }
        </option>
        <option value={ values[1] }>
          { values[1] }
        </option>
        <option value={ values[2] }>
          { values[2] }
        </option>
      </select>
    );
  }
}

Rarity.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Rarity;
