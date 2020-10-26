import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';

import { Action } from './styles';

function Actions({ children }) {
  const outsideClick = useRef(null);

  const [action, setAction] = useState(false);

  const handleClickOutside = useCallback(
    (event) => {
      if (!outsideClick.current.contains(event.target)) {
        setAction(false);
      }
    },
    [outsideClick]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Action
      ref={outsideClick}
      isAction={action}
      onMouseLeave={() => setAction(false)}
      onMouseOut={() => {
        setAction(true);
      }}
      onBlur={() => {
        setAction(false);
      }}
    >
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
