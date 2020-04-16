import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ title, hasSearch, searchTitle, buttonLink }) {
  if (hasSearch) {
    return (
      <>
        <h1>{title}</h1>
        <Container>
          <input type="text" placeholder={searchTitle} />
          <Link to={buttonLink}>CADASTRAR</Link>
        </Container>
      </>
    );
  }
}
