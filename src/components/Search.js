import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Search extends Component {
  render() {
    const { filterName, onInputChange } = this.props;
    return (
      <form>
        <Input
          name="filterName"
          id="name-filter"
          type="text"
          message="Nome da carta"
          value={ filterName }
          onInputChange={ onInputChange }
        />
      </form>
    );
  }
}

Search.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
