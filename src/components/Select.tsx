import React, { useEffect, useState } from 'react';
import styles from './select.module.css';

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

export default function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  function isSameElement(option: SelectOption) {
    return option.value === value?.value && option.label === value?.label;
  }
  function clearOptions() {
    onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (!isSameElement(option)) onChange(option);
  }

  function isOptionSelected(option: SelectOption) {
    return isSameElement(option);
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      className={styles.container}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}>
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles['clear-btn']}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {options.map((o, index) => (
          <li
            key={o.value}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(o);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            className={`${styles.option} ${
              isOptionSelected(o) ? styles.selected : ''
            } ${highlightedIndex === index ? styles.highlighted : ''}`}>
            {o.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
