import React from 'react';
import styles from './textInput.module.scss';

const TextInput = ({ placeholder }) => {
  return (
    <input className={styles.text_input} placeholder={placeholder} />
  );
};

export default TextInput;
