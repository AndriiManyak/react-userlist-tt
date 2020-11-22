/* eslint-disable react/prop-types */
import React from 'react';

export const User = ({ name, surname, desc }) => (
  <div className="User">
    <h3 className="User__name">{`${name} ${surname}`}</h3>
    <p className="User__description">{desc}</p>
  </div>
);
