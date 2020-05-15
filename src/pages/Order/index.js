import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import Header from '~/components/Header/List';
import { Container } from '~/components/Container/styles';
import { Background } from '~/components/Background/styles';
import { Table } from '~/components/Table/style';
import { Actions } from './styles';

export default function Order() {
  const [, setSearchValue] = useState('');
  const [actions, setActions] = useState(false);

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
              <td>
                <Actions actions={actions}>
                  <button type="button" onClick={() => setActions(!actions)}>
                    <MdMoreHoriz color="#C6C6C6" size={32} />
                  </button>
                  <div className="actions">
                    <ul>
                      <li>
                        <Link to="/order/edit/1">
                          <MdVisibility color="#8E5BE8" />
                          Visualizar
                        </Link>
                      </li>
                      <li>
                        <Link to="/order/edit/1">
                          <MdCreate color="#4D85EE" />
                          Editar
                        </Link>
                      </li>
                      <li>
                        <Link to="/order/edit/1">
                          <MdDeleteForever color="#DE3B3B" />
                          Excluir
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Actions>
              </td>
            </tr>
            <tr>
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <td>John Doe</td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>ENTREGUE</td>
              <td>
                <Actions actions={actions}>
                  <button type="button" onClick={() => setActions(!actions)}>
                    <MdMoreHoriz color="#C6C6C6" size={32} />
                  </button>
                  <div className="actions">
                    <ul>
                      <li>
                        <Link to="/order/edit/1">
                          <MdVisibility color="#8E5BE8" />
                          Visualizar
                        </Link>
                      </li>
                      <li>
                        <Link to="/order/edit/1">
                          <MdCreate color="#4D85EE" />
                          Editar
                        </Link>
                      </li>
                      <li>
                        <Link to="/order/edit/1">
                          <MdDeleteForever color="#DE3B3B" />
                          Excluir
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Actions>
              </td>
            </tr>
          </tbody>
        </Table>
      </Background>
    </Container>
  );
}
