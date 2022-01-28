import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name } = this.props;
    return (
      <label htmlFor="description-imput">
        {name}
        <textarea
          id={ name }
          name={ name }
          data-testid="description-input"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextArea;
