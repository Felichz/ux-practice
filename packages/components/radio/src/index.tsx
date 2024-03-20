import React, { useState, createContext, useContext, useRef } from 'react';
import './index.css';
import classNames from 'classnames';

interface RadioContextProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  status?: 'error' | 'warning' | 'success';
  size?: 'md' | 'lg';
}

const RadioContext = createContext<RadioContextProps>({});

export interface RadioGroupProps extends RadioContextProps {
  /**
   * The label text for the radio group.
   */
  label: string;

  /**
   * Additional CSS class name for the radio group.
   */
  className?: string;

  children: React.ReactNode;
}

export interface RadioOptionProps {
  /**
   * The value of the radio option.
   */
  value: string;

  /**
   * The icon element to be displayed next to the radio option.
   */
  icon?: React.ReactNode;

  children: React.ReactNode;
}

const RadioGroup = ({
  label,
  value: propValue,
  onChange,
  disabled,
  status,
  size = 'md',
  className,
  children,
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = useState('');
  const radioGroupRef = useRef<HTMLDivElement>(null);

  const value = propValue !== undefined ? propValue : internalValue;

  const handleChange = (selectedValue: string) => {
    setInternalValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  const radioGroupClasses = classNames(
    'radio-group',
    `radio-group-${size}`,
    {
      'radio-group-disabled': disabled,
      'radio-group-error': status === 'error',
      'radio-group-warning': status === 'warning',
      'radio-group-success': status === 'success',
    },
    className
  );

  return (
    <RadioContext.Provider
      value={{ value, onChange: handleChange, disabled, status, size }}
    >
      <div className={radioGroupClasses} ref={radioGroupRef}>
        <div className="radio-group-label">{label}</div>
        {children}
      </div>
    </RadioContext.Provider>
  );
};

const RadioOption = ({ value, icon, children }: RadioOptionProps) => {
  const {
    value: selectedValue,
    onChange,
    disabled,
    status,
    size,
  } = useContext(RadioContext);

  const handleChange = () => {
    if (onChange && !disabled) {
      onChange(value);
    }
  };

  const radioOptionClasses = classNames(
    'radio-option',
    `radio-option-${size}`,
    {
      'radio-option-error': status === 'error',
      'radio-option-warning': status === 'warning',
      'radio-option-success': status === 'success',
    }
  );

  return (
    <label className={radioOptionClasses}>
      <input
        type="radio"
        value={value}
        checked={selectedValue === value}
        onChange={handleChange}
        disabled={disabled}
        aria-label={children as string}
      />
      <span className={`radio-icon radio-icon-${size}`} />
      {icon && (
        <span className={`radio-option-icon radio-option-icon-${size}`}>
          {icon}
        </span>
      )}
      <span className="radio-option-label">{children}</span>
    </label>
  );
};

export const Radio = {
  Group: RadioGroup,
  Option: RadioOption,
};
