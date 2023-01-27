import React from 'react';
import styles from './select.module.css';

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

export default function Select({ value, onChange, options }: SelectProps) {
  return (
    <div className={styles.container} tabIndex={0}>
      <span className={styles.value}>{value?.label}</span>
      <button className={styles['clear-btn']}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${styles.show}`}>
        {options.map((o) => (
          <li key={o.value} className={`${styles.option}`}>
            {o.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
