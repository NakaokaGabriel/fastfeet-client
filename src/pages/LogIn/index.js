import React from 'react';

import { Container } from './styles';

import logo from '~/assets/logo.svg';

export default function LogIn() {
  return (
    <Container>
      <img src={logo} alt="fastfeet" />
      <Form />
    </Container>
  );
}
