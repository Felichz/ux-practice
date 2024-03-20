import React from 'react';
import './index.css';
import classNames from 'classnames';

export interface TextProps {
  /**
   * The content of the text component.
   */
  children: React.ReactNode;

  /**
   * The size of the text.
   * Defaults to `md`.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Additional CSS class name for the text.
   */
  className?: string;
}

export const Text = ({ children, size = 'md', className }: TextProps) => {
  const textClasses = classNames('text', `text-${size}`, className);

  return <p className={textClasses}>{children}</p>;
};
