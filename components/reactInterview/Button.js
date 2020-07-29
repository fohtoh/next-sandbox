import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/ReactInterview1.module.css';

export const Button = props => {
  const { text, onButtonClick, primary } = props;

  return (
    <button
      className={`${styles.buttons} ${primary ? styles.primary : ''}`}
      type="button"
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func,
  primary: PropTypes.bool,
};
