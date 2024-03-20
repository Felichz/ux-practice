import React from 'react';
import './index.css';
import classNames from 'classnames';

export interface HeadingProps {
  /**
   * The content of the heading component.
   */
  children: React.ReactNode;

  /**
   * The level of the heading.
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The size of the heading.
   * Defaults to `md`.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Additional CSS class name for the heading.
   */
  className?: string;
}

export const Heading = ({
  children,
  level,
  size = 'md',
  className,
}: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingClasses = classNames(
    'heading',
    `heading-${size}`,
    `heading-level-${level}`,
    className
  );

  return <HeadingTag className={headingClasses}>{children}</HeadingTag>;
};
