import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  render() {
    const { name, type = 'text' } = this.props;
    return (
      <label htmlFor="name-imput">
        {name}
        <input
          type={ type }
          id={ name }
          name={ name }
          data-testid="name-input"
        />
      </label>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Name;
