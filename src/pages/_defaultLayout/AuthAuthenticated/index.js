import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function AuthAuthenticated({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthAuthenticated.propTypes = {
  children: PropTypes.element.isRequired,
};
