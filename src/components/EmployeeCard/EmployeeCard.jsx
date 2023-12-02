import React from 'react';

import { normalizePhoneNumber } from 'src/utils';

import './employeeCard.scss';

export const EmployeeCard = (props) => {
  const { photo, name, position, email, phone } = props;
  return (
    <div className="employee-card">
      <img className="employee-card__image" src={photo} alt={photo} />
      <div className="employee-card__name" title={name}>
        {name}
      </div>
      <div className="employee-card__body">
        <div className="employee-card__item" title={position}>
          {position}
        </div>
        <div className="employee-card__item" title={email}>
          {email}
        </div>
        <div className="employee-card__item" title={normalizePhoneNumber(phone)}>
          {normalizePhoneNumber(phone)}
        </div>
      </div>
    </div>
  );
};
