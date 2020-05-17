import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';

import { Action } from './styles';

function Actions({ children }) {
  const [action, setAction] = useState(false);

  return (
    <Action isAction={action}>
      <button type="button" onClick={() => setAction(!action)}>
        <MdMoreHoriz color="#C6C6C6" size={32} />
      </button>
      <div className="actions">
        <ul>{children}</ul>
      </div>
    </Action>
  );
}

Actions.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default Actions;
