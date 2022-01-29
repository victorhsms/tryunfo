import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Nome: '',
      Descricao: '',
      attr01: '0',
      attr02: '0',
      attr03: '0',
      Imagem: '',
      Raridade: 'normal',
      Trunfo: false,
      hasTrunfo: false,
      cards: [],
      submit: true,
    };
  }

  componentDidUpdate() { // referência: https://pt-br.reactjs.org/docs/react-component.html#componentdidupdate
    const {
      Nome,
      Descricao,
      attr01,
      attr02,
      attr03,
      Imagem,
      Raridade,
      submit,
    } = this.state;
    const minAttr = 0;
    const maxAttr = 90;
    const sumAttrs = parseInt(attr01, 10) + parseInt(attr02, 10) + parseInt(attr03, 10);
    const maxSumAttrs = 210;
    const validateState = [
      Nome.length !== 0,
      Descricao.length !== 0,
      Imagem.length !== 0,
      Raridade.length > 0,
      parseInt(attr01, 10) >= minAttr && parseInt(attr01, 10) <= maxAttr,
      parseInt(attr02, 10) >= minAttr && parseInt(attr02, 10) <= maxAttr,
      parseInt(attr03, 10) >= minAttr && parseInt(attr03, 10) <= maxAttr,
      sumAttrs <= maxSumAttrs,
    ];
    if (validateState.every((state) => state) && submit === true) {
      this.enableButton(false);
    } else if (!(validateState.every((state) => state)) && submit === false) {
      this.enableButton(true);
    }
  }

  enableButton = (result) => {
    this.setState({
      submit: result,
    });
  }

  newCard = () => {
    const {
      Nome,
      Descricao,
      attr01,
      attr02,
      attr03,
      Imagem,
      Raridade,
      Trunfo,
      cards,
    } = this.state;
    const cardFinished = {
      Nome,
      Descricao,
      attr01,
      attr02,
      attr03,
      Imagem,
      Raridade,
      Trunfo,
    };
    if (cardFinished.Trunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    // referencia: https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array
    this.setState({
      Nome: '',
      Descricao: '',
      attr01: '0',
      attr02: '0',
      attr03: '0',
      Imagem: '',
      Raridade: 'normal',
      cards: [...cards, cardFinished],
    });
  }

  onInputChange = ({ target }) => {
    const { Trunfo } = this.state;
    if (target.type === 'checkbox') {
      this.setState({
        Trunfo: !(Trunfo),
      });
    } else {
      this.setState({
        [target.name]: target.value,
      });
    }
  }

  render() {
    const {
      Nome,
      Descricao,
      attr01,
      attr02,
      attr03,
      Imagem,
      Raridade,
      Trunfo,
      hasTrunfo,
      submit,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ Nome }
          cardDescription={ Descricao }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ Imagem }
          cardRare={ Raridade }
          cardTrunfo={ Trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ submit }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.newCard }
        />
        <Card
          cardName={ Nome }
          cardDescription={ Descricao }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ Imagem }
          cardRare={ Raridade }
          cardTrunfo={ Trunfo }
        />
      </div>
    );
  }
}

export default App;
