import React from 'react';
import styles from './purpleButton.module.scss';

const PurpleButton = ({ onClick, children }) => {
  return (
    <button className={styles.purple_button} onClick={onClick}>{children}</button>
  );
};

export default PurpleButton;
