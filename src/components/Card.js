import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      btn,
      btnAction,
      identifier,
    } = this.props;

    const btnJsx = (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ btnAction }
        identifier={ identifier }
        hastrunfo={ cardTrunfo ? 'true' : 'false' }
      >
        Excluir
      </button>);
    return (
      <div>
        <section>
          <h2 data-testid="name-card">{ cardName }</h2>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : null }
          {btn ? btnJsx : null}
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  btnAction: PropTypes.func.isRequired,
  identifier: PropTypes.string.isRequired,
};

export default Card;
