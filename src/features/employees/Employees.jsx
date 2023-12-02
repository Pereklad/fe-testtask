import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  fetchMoreUsers,
  fetchUsersList,
  isLoadingUsersListSelector,
  usersListMetaDataSelector,
  usersListSelector
} from 'src/store/users';

import { Button, EmployeeCard, Layout, Loader } from 'src/components';

import './employees.scss';

export const Employees = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const employeesList = useSelector(usersListSelector);
  const employeeMetaData = useSelector(usersListMetaDataSelector);
  const isLoadingEmployeesList = useSelector(isLoadingUsersListSelector);

  useEffect(() => {
    const payload = { page: 1, count: 6 };

    dispatch(fetchUsersList(payload));
  }, [dispatch]);

  const onClickShowMore = useCallback(() => {
    const payload = { page: employeeMetaData.page + 1, count: 6 };

    dispatch(fetchMoreUsers(payload));
  }, [dispatch, employeeMetaData]);

  const isDisabledButton =
    isLoadingEmployeesList || employeeMetaData.page === employeeMetaData.total_pages;

  return (
    <Layout title={t('home:employees:title')}>
      <div className="employees">
        <div className="employees__grid">
          {employeesList?.map((item) => (
            <EmployeeCard
              key={item.id}
              photo={item.photo}
              name={item.name}
              position={item.position}
              email={item.email}
              phone={item.phone}
            />
          ))}
        </div>
        {isLoadingEmployeesList && <Loader />}
        <div className="employees__button">
          <Button
            title={t('buttons:show_more')}
            onClick={onClickShowMore}
            disabled={isDisabledButton}
          />
        </div>
      </div>
    </Layout>
  );
};
