import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Button({ link }) {
  return <Link to={link}>CADASTRAR</Link>;
}
