import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './input.scss';

export const Input = (props) => {
  const { value = '', onChange, error, label, helperText, type = 'text' } = props;

  const labelStyles = classNames({
    input__label: true,
    'label-up': value
  });

  const containerStyles = classNames({
    input__container: true,
    error: error
  });

  return (
    <div className={containerStyles}>
      <label htmlFor="inputLabel" className={labelStyles}>
        {label}
      </label>
      <input value={value} type={type} onChange={onChange} id="inputLabel" className="input" />
      {helperText && <div className="input__helper-text">{helperText}</div>}
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
};
