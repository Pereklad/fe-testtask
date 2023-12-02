import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'src/components';

import { LogoImage } from 'src/assets';
import './header.scss';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <img src={LogoImage} alt={LogoImage} width={104} height={26} />
      <div className="header__content">
        <Button title={t('buttons:users')} />
        <Button title={t('buttons:sign_up')} />
      </div>
    </div>
  );
};
