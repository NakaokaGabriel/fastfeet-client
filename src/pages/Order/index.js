import React, { useState } from 'react';

import Header from '~/components/Header/List';
import { Container } from '~/components/Container/styles';
import { Background } from '~/components/Background/styles';
import { Table } from '~/components/Table/style';

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
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <td>John Doe</td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>ENTREGUE</td>
              <td>...</td>
            </tr>
            <tr>
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <td>John Doe</td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>ENTREGUE</td>
              <td>...</td>
            </tr>
          </tbody>
        </Table>
      </Background>
    </Container>
  );
}
