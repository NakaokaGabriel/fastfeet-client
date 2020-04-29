import React from 'react';

import { Container } from '~/components/Container/styles';
import { Background } from '~/components/Background/styles';
import { FormGroup, InputGroup } from '~/components/Form/styles';

import Header from '~/components/Header/Default';

export default function Register() {
  return (
    <Container>
      <Header title="Cadastro de encomendas" />
      <Background background>
        <FormGroup>
          <InputGroup>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="destinatario">Destinatário</label>
            <input type="text" />
          </InputGroup>

          <InputGroup>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="entregador">Entregador</label>
            <input type="text" />
          </InputGroup>

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          {/* <label htmlFor="produto">Nome do produto</label>
          <input type="text" /> */}
        </FormGroup>
      </Background>
    </Container>
  );
}
