import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Container, Utils, Search } from './styles';

export default function Header({ title, searchTitle, setSearchValue, linkTo }) {
  return (
    <Container>
      <h1>{title && title}</h1>
      <Utils>
        <Search>
          <MdSearch size={24} color="#999999" />
          <input
            type="text"
            placeholder={searchTitle}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Search>
        <Link to={linkTo}>
          <MdAdd size={20} />
          CADASTRAR
        </Link>
      </Utils>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchTitle: PropTypes.string,
  setSearchValue: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  linkTo: PropTypes.string,
};

Header.defaultProps = {
  title: true,
  searchTitle: true,
  setSearchValue: false,
  linkTo: true,
};
