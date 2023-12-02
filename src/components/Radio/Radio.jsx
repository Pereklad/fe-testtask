import React from 'react';
import PropTypes from 'prop-types';

import './radio.scss';

export const Radio = (props) => {
  const { id, value, checked, label, onChange } = props;

  return (
    <section className="radio-wrapper">
      <input
        type="radio"
        id={id}
        value={value}
        className="radio"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </section>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};
