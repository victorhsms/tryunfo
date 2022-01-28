import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <Form
        cardName="App"
        cardDescription=""
        cardAttr1=""
        cardAttr2=""
        cardAttr3=""
        cardImage=""
        cardRare=""
        cardTrunfo=""
        hasTrunfo={ false }
        isSaveButtonDisabled={ false }
        onInputChange={ () => {} }
        onSaveButtonClick={ () => {} }
      />
    );
  }
}

export default App;
