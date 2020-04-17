import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Utils } from './styles';

export default function Header({ title, hasSearch, searchTitle, buttonLink }) {
  if (hasSearch) {
    return (
      <Container>
        <h1>{title}</h1>
        <Utils>
          <input type="text" placeholder={searchTitle} />
          <Link to={buttonLink}>CADASTRAR</Link>
        </Utils>
      </Container>
    );
  }
}
