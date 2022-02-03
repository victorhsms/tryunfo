import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './form/TextArea';
import Numbers from './form/Numbers';
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Input
          name="Nome"
          id="name-input"
          type="text"
          message="Nome"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <TextArea
          name="Descricao"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Numbers
          name={ ['attr01', 'attr02', 'attr03'] }
          value={ [cardAttr1, cardAttr2, cardAttr3] }
          onInputChange={ onInputChange }
        />
        <Input
          name="Imagem"
          id="image-input"
          type="text"
          message="Imagem"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <Rarity
          name="Raridade"
          id="rare-input"
          values={ ['normal', 'raro', 'muito raro'] }
          value={ cardRare }
          onInputChange={ onInputChange }
        />
        { !hasTrunfo ? <Trunfo
          name="Trunfo"
          checked={ cardTrunfo }
          onInputChange={ onInputChange }
        /> : <p>Você já tem um Super Trunfo em seu baralho</p>}
        <button
          name="submit"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
