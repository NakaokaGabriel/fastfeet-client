import React, { useState } from 'react';

import Header from '~/components/Header';
import { Container } from '~/components/Container/styles';
import { Background } from '~/components/Background/styles';
import { Table, Head, Body } from '~/components/Table/style';

export default function Order() {
  const [, setSearchValue] = useState('');

  return (
    <Container>
      <Header
        title="Gerenciando encomendas"
        searchTitle="Buscar por encomendas"
        setSearchValue={setSearchValue}
        linkTo="/order/register"
      />
      <Background>
        <Table>
          <Head columns="7">
            <strong>ID</strong>
            <strong>Destinatário</strong>
            <strong>Entregador</strong>
            <strong>Cidade</strong>
            <strong>Estado</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </Head>
          <Body>
            <p>#01</p>
            <p>Ludwig van Beethoven</p>
            <p>John Doe</p>
            <p>Rio do Sul</p>
            <p>Santa Catarina</p>
            <p>ENTREGUE</p>
            <p>...</p>
          </Body>
          <Body>
            <p>#01</p>
            <p>Ludwig van Beethoven</p>
            <p>John Doe</p>
            <p>Rio do Sul</p>
            <p>Santa Catarina</p>
            <p>ENTREGUE</p>
            <p>...</p>
          </Body>
        </Table>
      </Background>
    </Container>
  );
}
