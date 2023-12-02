import React, { useCallback, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './uploadImage.scss';

export const UploadImage = (props) => {
  const { file, helperText, error, onChange } = props;

  const fileRef = useRef(null);

  const onChangeInput = useCallback(
    (event) => {
      onChange(event.target.files[0]);
    },
    [onChange]
  );

  const handleClick = useCallback(() => {
    fileRef.current.click();
  }, []);

  const uploadImageStyles = classNames({
    'upload-image': true,
    error: error
  });

  const buttonStyles = classNames({
    'upload-image__button': true,
    error: error
  });

  return (
    <div className={uploadImageStyles}>
      <button className={buttonStyles} onClick={handleClick} type="button">
        Upload
      </button>
      <input
        type="file"
        accept=".jpg, .jpeg"
        style={{ display: 'none' }}
        ref={fileRef}
        onChange={onChangeInput}
      />
      <input className="upload-image__input" value={file?.name} disabled />
      {helperText && <div className="input__helper-text">{helperText}</div>}
    </div>
  );
};

UploadImage.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
};
