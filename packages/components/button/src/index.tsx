import React from 'react';
import './index.css';
import classNames from 'classnames';

export interface ButtonProps {
  /**
   * The label text for the button.
   */
  label: string;

  /**
   * The click event handler for the button.
   */
  onClick: () => void;

  /**
   * The size of the button.
   * Defaults to `md`.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The kind (variant) of the button.
   */
  kind?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'destructive';

  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * Whether to show the loading spinner.
   */
  loading?: boolean;

  /**
   * The icon element to be displayed in the button.
   */
  icon?: React.ReactNode;
}

export const Button = ({
  label,
  onClick,
  size = 'md',
  kind = 'primary',
  disabled,
  loading,
  icon,
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const buttonClasses = classNames(
    'button',
    `button-${size}`,
    `button-${kind}`,
    { 'button-disabled': isDisabled }
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={label}
    >
      {loading && <span className="button-loading-spinner" />}
      {icon && !loading && <span className="button-icon">{icon}</span>}
      <span className="button-label">{label}</span>
    </button>
  );
};
