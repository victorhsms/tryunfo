import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Nome: '',
      Descricao: '',
      attr01: '',
      attr02: '',
      attr03: '',
      Imagem: '',
      Raridade: 'normal',
      Trunfo: false,
      // hasTrunfo: false,
      submit: true,
    };
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
      // hasTrunfo,
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
          hasTrunfo={ this.hasTrunfo }
          isSaveButtonDisabled={ submit }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ () => {} }
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
