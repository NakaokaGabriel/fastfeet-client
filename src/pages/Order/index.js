import React, { useState } from 'react';

// import { Container } from './styles';

import Header from '~/components/Header';
import { Container } from '~/components/Container/styles';

export default function Order() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Container>
        <Header
          title="Gerenciando encomendas"
          searchTitle="Buscar por encomendas"
          setSearchValue={setSearchValue}
          linkTo="/cu"
        />
        <h1>Container</h1>
      </Container>
    </>
  );
}
