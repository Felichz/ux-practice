import React from 'react';
import './index.css';
import classNames from 'classnames';

export interface InputProps {
  /**
   * The label text for the input.
   */
  label: string;

  /**
   * The placeholder text for the input.
   */
  placeholder?: string;

  /**
   * The size of the input.
   * Defaults to `md`
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The type of the input.
   * Defaults to `text`
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'textarea';

  variant?: 'standard' | 'underline' | 'filled';

  /**
   * Whether the input is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the input has an error.
   */
  error?: boolean;

  /**
   * The icon element to be displayed in the input.
   */
  icon?: React.ReactNode;

  /**
   * The width of the input. It can be a string to be passed to CSS or a number that will be interpreted as pixels.
   */
  width?: string | number;

  /**
   * The hint text to be displayed below the input.
   */
  hint?: string;

  /**
   * The maximum number of characters allowed in the input.
   */
  maxLength?: number;

  /**
   * The change event handler for the input.
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  /**
   * Whether to show the character count.
   */
  showCharacterCount?: boolean;

  /**
   * Additional CSS class name for the input.
   */
  className?: string;
}

export const Input = ({
  className,
  disabled,
  error,
  hint,
  icon,
  label,
  maxLength,
  onChange = () => null,
  placeholder,
  showCharacterCount,
  size = 'md',
  type = 'text',
  variant = 'standard',
  width,
}: InputProps) => {
  const [value, setValue] = React.useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);

    onChange(event);
  };

  const isTextarea = type === 'textarea';
  const InputElement = isTextarea ? 'textarea' : 'input';

  const inputClasses = classNames(
    'input',
    `input-${size}`,
    `input-${variant}`,
    {
      'input-disabled': disabled,
      'input-error': error,
      textarea: isTextarea,
    },
    className
  );

  const inputContainerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
  };

  const characterCount = value.length;

  return (
    <div className="input-container" style={inputContainerStyle}>
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <InputElement
          className={inputClasses}
          type={isTextarea ? undefined : type}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={label}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
        />
        {icon && <span className="input-icon">{icon}</span>}
      </div>
      <div className="input-footer">
        {hint && <div className="input-hint">{hint}</div>}
        {showCharacterCount && maxLength && (
          <div className="input-character-count">
            {characterCount}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
};
