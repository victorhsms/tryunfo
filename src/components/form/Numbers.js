import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Numbers extends Component {
  render() {
    const { name, type = 'number' } = this.props;
    return (
      <div>
        <label htmlFor="attr-imput">
          { name[0] }
          <input
            type={ type }
            id={ name[0] }
            name={ name[0] }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr-imput">
          { name[1] }
          <input
            type={ type }
            id={ name[1] }
            name={ name[1] }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr-imput">
          { name[2] }
          <input
            type={ type }
            id={ name[2] }
            name={ name[2] }
            data-testid="attr3-input"
          />
        </label>
      </div>
    );
  }
}

Numbers.propTypes = {
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};

export default Numbers;
