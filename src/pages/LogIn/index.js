import React from 'react';

import { Container, Form, FormGroup } from './styles';

import logo from '~/assets/logo.svg';

export default function LogIn() {
  return (
    <Container>
      <img src={logo} alt="fastfeet" />
      <Form>
        <FormGroup>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">SEU E-MAIL</label>
          <input type="text" id="email" placeholder="exemplo@email.com" />
        </FormGroup>

        <FormGroup>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">SUA SENHA</label>
          <input type="password" id="password" placeholder="*************" />
        </FormGroup>

        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
