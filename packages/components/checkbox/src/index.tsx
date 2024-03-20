import React, { useState } from 'react';
import './index.css';
import classNames from 'classnames';

export interface CheckboxProps {
  /**
   * The label text for the checkbox.
   */
  label: string;

  /**
   * Whether the checkbox is checked.
   */
  checked?: boolean;

  /**
   * The change event handler for the checkbox.
   */
  onChange?: (checked: boolean) => void;

  /**
   * The size of the checkbox.
   * Defaults to `md`.
   */
  size?: 'md' | 'lg';

  /**
   * Whether the checkbox is disabled.
   */
  disabled?: boolean;

  /**
   * The status of the checkbox.
   */
  status?: 'error' | 'warning' | 'success';

  /**
   * The icon element to be displayed next to the checkbox.
   */
  icon?: React.ReactNode;

  /**
   * Additional CSS class name for the checkbox.
   */
  className?: string;
}

export const Checkbox = ({
  label,
  checked,
  onChange = () => null,
  size = 'md',
  disabled,
  status,
  icon,
  className,
}: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState(false);

  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(event.target.checked);
    }

    onChange(event.target.checked);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (checked === undefined) {
        setInternalChecked(!isChecked);
      }

      onChange(!isChecked);
    }
  };

  const checkboxClasses = classNames(
    'checkbox',
    `checkbox-${size}`,
    {
      'checkbox-disabled': disabled,
      'checkbox-error': status === 'error',
      'checkbox-warning': status === 'warning',
      'checkbox-success': status === 'success',
    },
    className
  );

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        aria-label={label}
        onKeyDown={handleKeyDown}
      />
      <span className="checkbox-icon" />
      {icon && <span className="checkbox-custom-icon">{icon}</span>}
      <span className="checkbox-label">{label}</span>
    </label>
  );
};
