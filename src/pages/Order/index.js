import React from 'react';

// import { Container } from './styles';

import Header from '~/components/Header';
import { Container } from '~/components/Container/styles';

export default function Order() {
  return (
    <>
      <Container>
        <Header
          title="Gerenciando encomendas"
          hasSearch
          searchTitle="Buscar por encomendas"
        />
        <h1>Container</h1>
      </Container>
    </>
  );
}
