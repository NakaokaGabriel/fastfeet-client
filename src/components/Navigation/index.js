import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Group, Profile } from './styles';

import logo from '~/assets/logo.svg';

export default function Navigation() {
  return (
    <Nav>
      <Group>
        <img src={logo} alt="Fastfeet" />
        <ul>
          <li>
            <Link to="orders">ENCOMENDAS</Link>
          </li>
          <li>
            <Link to="couriers">ENTREGADORES</Link>
          </li>
          <li>
            <Link to="order">DESTINATÁRIOS</Link>
          </li>
          <li>
            <Link to="order">PROBLEMAS</Link>
          </li>
        </ul>
      </Group>
      <Profile>
        <p>Admin FastFeet</p>
        <button type="button">sair do sistema</button>
      </Profile>
    </Nav>
  );
}
