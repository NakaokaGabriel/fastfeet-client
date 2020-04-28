import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, Utils, ButtonGroup } from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <Utils>
        <h1>{title && title}</h1>
        <ButtonGroup>
          <Link to="/orders">
            <MdKeyboardArrowLeft size={24} /> VOLTAR
          </Link>
          <button type="button">
            <MdCheck size={24} /> SALVAR
          </button>
        </ButtonGroup>
      </Utils>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: true,
};
