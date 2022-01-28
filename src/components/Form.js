import React from 'react';
import PropTypes from 'prop-types';
import Name from './form/Name';
import TextArea from './form/TextArea';
import Numbers from './form/Numbers';
import Image from './form/Image';
import Rarity from './form/Rarity';
import Trunfo from './form/Trunfo';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Name
          name="Nome"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <TextArea
          name="Descrição"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Numbers
          name={ ['attr01', 'attr02', 'attr03'] }
          value={ [cardAttr1, cardAttr2, cardAttr3] }
          onInputChange={ onInputChange }
        />
        <Image
          name="Imagem"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <Rarity
          name="Raridade"
          values={ ['normal', 'raro', 'muito raro'] }
          value={ cardRare }
          onInputChange={ onInputChange }
        />
        <Trunfo
          checked={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
