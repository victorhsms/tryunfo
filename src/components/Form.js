import React from 'react';
import Name from './form/Name';
import TextArea from './form/TextArea';
import Numbers from './form/Numbers';
import Image from './form/Image';
import Rarity from './form/Rarity';
import Trunfo from './form/Trunfo';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Name name="Nome" />
        <TextArea name="Descrição" />
        <Numbers name={ ['attr01', 'attr02', 'attr03'] } />
        <Image name="Imagem" />
        <Rarity name="Raridade" values={ ['normal', 'raro', 'muito raro'] } />
        <Trunfo />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
