import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export const Button = (props) => {
  const { title = '', type = 'button', onClick, disabled = false } = props;

  return (
    <button className="button" onClick={onClick} type={type} disabled={disabled}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
