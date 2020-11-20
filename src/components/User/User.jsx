/* eslint-disable react/prop-types */
import React from 'react';

export const User = ({ name, surname }) => (
  <div>
    <p>{`${name} ${surname}`}</p>
  </div>
);
