import React from 'react';
import styles from './outlinedButton.module.scss';

const OutlinedButton = ({ onClick, children }) => {
  return (
    <button className={styles.outlined_button} onClick={onClick}>{children}</button>
  );
};

export default OutlinedButton;
