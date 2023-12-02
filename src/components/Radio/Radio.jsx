import React from 'react';
import PropTypes from 'prop-types';

import './radio.scss';

export const Radio = (props) => {
  const { value, checked, label, onChange } = props;

  return (
    <section className="radio-wrapper">
      <input
        type="radio"
        id="radio-content"
        value={value}
        className="radio"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="radio-content">{label}</label>
    </section>
  );
};

Radio.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};
