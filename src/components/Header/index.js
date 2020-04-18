import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import Button from './Button';
import { Container, Utils, Search } from './styles';

export default function Header({
  title,
  hasSearch,
  searchTitle,
  hasButton,
  buttonLink,
}) {
  if (hasSearch) {
    return (
      <Container>
        <h1>{title && title}</h1>
        <Utils>
          <Search>
            <MdSearch size={24} color="#999999" />
            <input type="text" placeholder={searchTitle} />
          </Search>
          {hasButton && <Button link={buttonLink} />}
          {/* <Link to={buttonLink}>CADASTRAR</Link> */}
        </Utils>
      </Container>
    );
  }
}
