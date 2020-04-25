import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Group, Profile } from './styles';

import logo from '~/assets/logo.svg';

export default function Navigation() {
  const url = window.location.pathname;

  const [, pathname] = url.split('/');

  const list = [
    {
      name: 'ENCOMENDAS',
      link: '/orders',
      active: ['orders', 'order'],
    },
    {
      name: 'ENTREGADORES',
      link: '/couriers',
      active: ['couriers', 'courier'],
    },
    {
      name: 'DESTINATÁRIOS',
      link: '/recipients',
      active: ['recipients', 'recipient'],
    },
    {
      name: 'PROBLEMAS',
      link: '/problems',
      active: ['problems'],
    },
  ];

  return (
    <Nav>
      <Group>
        <img src={logo} alt="Fastfeet" />
        <ul>
          {list.map((itens) => (
            <li key={itens.name}>
              <Link to={itens.link}>{itens.name}</Link>
            </li>
          ))}
        </ul>
      </Group>
      <Profile>
        <p>Admin FastFeet</p>
        <button type="button">sair do sistema</button>
      </Profile>
    </Nav>
  );
}
