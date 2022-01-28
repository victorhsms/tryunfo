import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { name, type = 'text' } = this.props;
    return (
      <label htmlFor="image-imput">
        {name}
        <input
          type={ type }
          id={ name }
          name={ name }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Image;
