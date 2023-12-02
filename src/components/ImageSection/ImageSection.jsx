import React from 'react';
import PropTypes from 'prop-types';

import './imageSection.scss';
import { Button } from '../Button/Button';

export const ImageSection = (props) => {
  const { title, description, buttonTitle, source } = props;

  return (
    <div className="image-section">
      {/* <div className="image-section__backdrop" /> */}
      <div className="image-section__content">
        <div className="image-section__content-body">
          <h1 className="image-section__title">{title}</h1>
          <p className="image-section__description">{description}</p>
          <div className="image-section__button">
            <Button title={buttonTitle} />
          </div>
        </div>
      </div>
      <img className="image-section__image" src={source} alt={source} />
    </div>
  );
};

ImageSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string
};
