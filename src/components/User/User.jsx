import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, surname, desc }) => (
  <div className="User">
    <h3 className="User__name">{`${name} ${surname}`}</h3>
    <p className="User__description">{desc}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
