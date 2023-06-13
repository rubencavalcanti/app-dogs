import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.name} className={styles.label}>{props.label}</label>
      <input id={props.name} name={props.name} className={styles.input} type={props.type}/>
      <p className={styles.error}>Error</p>
    </div>
    
  )
}

export default Input;