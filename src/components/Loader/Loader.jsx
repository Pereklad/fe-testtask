import React from 'react';

import { LoaderImage } from 'src/assets';
import './loader.scss';

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img className="loader" src={LoaderImage} alt={LoaderImage} />
    </div>
  );
};
