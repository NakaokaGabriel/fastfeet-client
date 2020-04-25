import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Group, Profile } from './styles';

import logo from '~/assets/logo.svg';

export default function Navigation() {
  const url = window.location.pathname;

  const [, pathname] = url.split('/');

  return (
    <Nav>
      <Group>
        <img src={logo} alt="Fastfeet" />
        <ul>
          <li
            className={
              pathname === 'orders' || pathname === 'order' ? 'active' : ''
            }
          >
            <Link to="/orders">ENCOMENDAS</Link>
          </li>
          <li
            className={
              pathname === 'couriers' || pathname === 'courier' ? 'active' : ''
            }
          >
            <Link to="/couriers">ENTREGADORES</Link>
          </li>
          <li
            className={
              pathname === 'recipients' || pathname === 'recipient'
                ? 'active'
                : ''
            }
          >
            <Link to="/recipients">DESTINATÁRIOS</Link>
          </li>
          <li className={pathname === 'problems' ? 'active' : ''}>
            <Link to="/problems">PROBLEMAS</Link>
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
