import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/ReactInterview1.module.css';

export const Input = props => {
  const [value, setValue] = useState();
  const { id, label, name, size } = props;

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label className={styles.label}>{label}</label>
      <br />
      <input
        id={id}
        className={styles.input}
        type="text"
        name={name}
        onChange={handleChange}
        input={value}
        size={size}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};
