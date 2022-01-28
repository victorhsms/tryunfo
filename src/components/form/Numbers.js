import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Numbers extends Component {
  render() {
    const { name, type = 'number', value, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="attr-imput">
          { name[0] }
          <input
            type={ type }
            id={ name[0] }
            name={ name[0] }
            data-testid="attr1-input"
            value={ value[0] }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr-imput">
          { name[1] }
          <input
            type={ type }
            id={ name[1] }
            name={ name[1] }
            data-testid="attr2-input"
            value={ value[1] }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr-imput">
          { name[2] }
          <input
            type={ type }
            id={ name[2] }
            name={ name[2] }
            data-testid="attr3-input"
            value={ value[2] }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Numbers.propTypes = {
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Numbers;
