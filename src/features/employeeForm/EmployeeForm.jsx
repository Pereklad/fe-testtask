import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  fetchUserPositions,
  userPositionsSelector,
  createUser,
  userFormErrorsSelector,
  isLoadingCreateUserSelector,
  isUserCreatedSelector,
  setIsUserCreated
} from 'src/store/users';

import { Button, Input, Layout, Radio, UploadImage } from 'src/components';

import './employeeForm.scss';
import { SuccessImage } from 'src/assets';

export const EmployeeForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const userPositions = useSelector(userPositionsSelector);

  const formErros = useSelector(userFormErrorsSelector);
  const isLoadingCreateUser = useSelector(isLoadingCreateUserSelector);
  const isUserCreated = useSelector(isUserCreatedSelector);

  useEffect(() => {
    dispatch(fetchUserPositions());
  }, [dispatch]);

  useEffect(() => {
    if (isUserCreated) {
      setTimeout(() => {
        dispatch(setIsUserCreated(false));
      }, 5000);
    }
  }, [dispatch, isUserCreated]);

  const formFields = {
    email: '',
    name: '',
    phone: '',
    position_id: ''
  };

  const [formData, setFormData] = useState(formFields);

  const onChangeInput = useCallback((event, key) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  }, []);

  const onChangePosition = useCallback((event) => {
    setFormData((prev) => ({ ...prev, position_id: event.target.value }));
  }, []);

  const onChangePhoto = useCallback((file) => {
    setFormData((prev) => ({ ...prev, photo: file }));
  }, []);

  const onSubmitForm = useCallback(
    async (event) => {
      event.preventDefault();

      const form = new FormData();

      for (let key in formData) {
        form.append(key, formData[key]);
      }

      dispatch(createUser({ form, setFormData }));
    },
    [dispatch, formData]
  );

  const normalizeFieldError = (key) => {
    if (formErros[key]?.length) {
      return formErros[key].join(' ');
    }
  };

  return (
    <Layout
      title={!isUserCreated ? t('home:employee_form:title') : t('home:employee_form:title_success')}
    >
      <div className="employee-form__wrapper">
        {!isUserCreated ? (
          <form className="employee-form" onSubmit={onSubmitForm}>
            <Input
              label={t('home:employee_form:inputs:email')}
              value={formData.email}
              helperText={normalizeFieldError('email')}
              error={normalizeFieldError('email')}
              onChange={(event) => onChangeInput(event, 'email')}
            />
            <Input
              label={t('home:employee_form:inputs:name')}
              value={formData.name}
              helperText={normalizeFieldError('name')}
              error={normalizeFieldError('name')}
              onChange={(event) => onChangeInput(event, 'name')}
            />
            <Input
              label={t('home:employee_form:inputs:phone')}
              value={formData.phone}
              error={normalizeFieldError('phone')}
              onChange={(event) => onChangeInput(event, 'phone')}
              helperText={
                normalizeFieldError('phone') ? normalizeFieldError('phone') : '+38 (XXX) XXX-XX-XX'
              }
            />

            <div className="employee-form__position">
              <p className="employee-form__position-title">{t('home:employee_form:radio:label')}</p>
              {userPositions?.map((item) => (
                <Radio
                  key={item.id}
                  value={item.id.toString()}
                  label={item.name}
                  checked={formData.position_id === item.id.toString()}
                  onChange={onChangePosition}
                />
              ))}
              {normalizeFieldError('position_id') && (
                <p className="employee-form__position-title error">
                  {normalizeFieldError('position_id')}
                </p>
              )}
            </div>
            <UploadImage
              file={formData.photo}
              onChange={onChangePhoto}
              helperText={normalizeFieldError('photo')}
              error={normalizeFieldError('photo')}
            />

            <Button title={t('buttons:sign_up')} type="submit" disabled={isLoadingCreateUser} />
          </form>
        ) : (
          <img src={SuccessImage} alt={SuccessImage} />
        )}
      </div>
    </Layout>
  );
};
