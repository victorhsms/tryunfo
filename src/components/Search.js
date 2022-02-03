import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Rarity from './form/Rarity';
import Trunfo from './form/Trunfo';

class Search extends Component {
  render() {
    const { filterName, filterRarity, filterTrunfo, onInputChange } = this.props;
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
        <Rarity
          name="filterRarity"
          id="rare-filter"
          values={ ['todas', 'normal', 'raro', 'muito raro'] }
          value={ filterRarity }
          onInputChange={ onInputChange }
        />
        <Trunfo
          name="filterTrunfo"
          message="Super Trybe Trunfo"
          id="trunfo-filter"
          checked={ filterTrunfo }
          onInputChange={ onInputChange }
        />
      </form>
    );
  }
}

Search.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRarity: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
