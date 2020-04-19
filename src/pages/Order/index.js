import React, { useState } from 'react';

// import { Container } from './styles';

import Header from '~/components/Header';
import { Container } from '~/components/Container/styles';

export default function Order() {
  const [, setSearchValue] = useState('');

  return (
    <>
      <Container>
        <Header
          title="Gerenciando encomendas"
          searchTitle="Buscar por encomendas"
          setSearchValue={setSearchValue}
          linkTo="/order/register"
        />
        <h1>Container</h1>
      </Container>
    </>
  );
}
