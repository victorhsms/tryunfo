import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name, value, onInputChange } = this.props;
    return (
      <label htmlFor="description-input">
        Descrição
        <textarea
          id={ name }
          name={ name }
          data-testid="description-input"
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TextArea;
