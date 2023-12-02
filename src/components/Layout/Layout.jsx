import React from 'react';
import PropTypes from 'prop-types';

import './layout.scss';

export const Layout = (props) => {
  const { title, children } = props;

  return (
    <div className="layout">
      <div className="layout__title">{title}</div>
      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
