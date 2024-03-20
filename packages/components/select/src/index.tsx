import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import classNames from 'classnames';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  /**
   * The label text for the select.
   */
  label: string;

  /**
   * The options for the select.
   */
  options: SelectOption[];

  /**
   * The selected value of the select.
   */
  value?: string;

  /**
   * The change event handler for the select.
   */
  onChange?: (value: string) => void;

  /**
   * The size of the select.
   * Defaults to `md`.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the select is disabled.
   */
  disabled?: boolean;

  /**
   * The status of the select.
   */
  status?: 'error' | 'warning' | 'success';

  /**
   * The icon element to be displayed in the select input.
   */
  icon?: React.ReactNode;

  /**
   * The width of the select. It can be a string to be passed to CSS or a number that will be interpreted as pixels.
   */
  width?: string | number;

  /**
   * Additional CSS class name for the select.
   */
  className?: string;
}

export const Select = ({
  label,
  options,
  value: propValue,
  onChange = () => null,
  size = 'md',
  disabled,
  status,
  icon,
  width,
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(propValue || '');
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (optionValue: string) => {
    if (!disabled) {
      setValue(optionValue);
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOpen(!isOpen);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const currentIndex = options.findIndex(
        (option) => option.value === value
      );

      const nextIndex =
        event.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < options.length) {
        setValue(options[nextIndex].value);
        onChange(options[nextIndex].value);
      }
    }
  };

  const selectedOption = options.find((option) => option.value === value);

  const selectClasses = classNames(
    'select',
    `select-${size}`,
    {
      'select-disabled': disabled,
      'select-error': status === 'error',
      'select-warning': status === 'warning',
      'select-success': status === 'success',
      'select-open': isOpen,
    },
    className
  );

  const selectContainerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
  };

  return (
    <div className="select-container" style={selectContainerStyle}>
      <label className="select-label">{label}</label>
      <div className={selectClasses} ref={selectRef}>
        <div
          className="select-value"
          tabIndex={0}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
        >
          {selectedOption ? (
            <span className="select-selected-option">
              {selectedOption.label}
            </span>
          ) : (
            <span className="select-placeholder">Select an option</span>
          )}
          {icon ? (
            <span className={`select-icon select-icon-${size}`}>{icon}</span>
          ) : (
            <span className="select-arrow" />
          )}
        </div>
        {isOpen && (
          <ul className="select-options" role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className={classNames('select-option', {
                  'select-option-selected': option.value === value,
                  'select-option-error': status === 'error',
                  'select-option-warning': status === 'warning',
                  'select-option-success': status === 'success',
                })}
                role="option"
                aria-selected={option.value === value}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
