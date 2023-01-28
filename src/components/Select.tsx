import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import styles from './select.module.css';

export type SelectOption = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  multi?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};
type MultiSelectProps = {
  multi: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};
type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultiSelectProps);

export default function Select({
  multi,
  value,
  onChange,
  options,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  const ddRef = useRef<HTMLDivElement | null>(null);
  function clearOptions() {
    multi ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multi) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else if (option.value !== value?.value && option.label !== value?.label) {
      onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    if (multi) {
      return value.includes(option);
    } else {
      return option.value === value?.value && option.label === value?.label;
    }
  }

  function handleKeyboard(e: KeyboardEvent) {
    if (e.target !== ddRef.current) return;

    switch (e.code) {
      case 'Enter':
      case 'Space':
        setIsOpen((o) => !o);
        if (isOpen) {
          selectOption(options[highlightedIndex]);
        }
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        {
          if (!isOpen) {
            setIsOpen(true);
            break;
          } else {
            const newIndex =
              highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
            if (newIndex >= 0 && newIndex < options.length) {
              setHighlightedIndex(newIndex);
            }
          }
        }
        break;
      case 'Escape':
        if (isOpen) setIsOpen(false);
        break;
    }
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      ref={ddRef}
      className={styles.container}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onKeyDown={handleKeyboard}
      onClick={() => setIsOpen((prev) => !prev)}>
      <span className={styles.value}>
        {multi ? (
          value?.map((v: SelectOption) => (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className={styles['option-badge']}>
                {v?.label}
                <span className={styles['remove-btn']}> &times;</span>{' '}
              </button>
            </>
          ))
        ) : (
          <>
            <span className={styles.value}>{value?.label}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearOptions();
              }}
              className={styles['clear-btn']}>
              &times;
            </button>
          </>
        )}
      </span>
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
