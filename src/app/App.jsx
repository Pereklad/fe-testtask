import React from 'react';
import { useTranslation } from 'react-i18next';

import { EmployeeForm, Employees, Header } from 'src/features';
import { ImageSection } from 'src/components';

import { MainImage } from 'src/assets';
import './app.scss';

export const App = () => {
  const { t } = useTranslation();

  return (
    <div className="app">
      <Header />
      <ImageSection
        title={t('home:image_section:title')}
        description={t('home:image_section:description')}
        buttonTitle={t('buttons:sign_up')}
        source={MainImage}
      />
      <div className="spacer" />
      <Employees />
      <div className="spacer" />
      <EmployeeForm />
    </div>
  );
};
