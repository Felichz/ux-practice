import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Input, type InputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    type: {
      options: ['text', 'email', 'password', 'number', 'search', 'textarea'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    maxLength: {
      control: { type: 'number' },
    },
    hint: {
      control: { type: 'text' },
    },
    showCharacterCount: {
      control: { type: 'boolean' },
    },
  },
} as Meta<InputProps>;

const BaseTemplate: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = BaseTemplate.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};

const Icon = (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

export const WithIcon = BaseTemplate.bind({});
WithIcon.args = {
  label: 'Input with Icon',
  placeholder: 'Placeholder',
  icon: Icon,
};

export const Disabled = (args: InputProps) => (
  <>
    <Input {...args} label="Disabled Text" disabled />
    <Input {...args} label="Disabled Textarea" type="textarea" disabled />
  </>
);

Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'Placeholder',
  disabled: true,
};

export const Underline = BaseTemplate.bind({});

Underline.args = {
  label: 'Underline Input',
  variant: 'underline',
};

export const Filled = BaseTemplate.bind({});

Filled.args = {
  label: 'Filled Input',
  variant: 'filled',
};

export const Error = BaseTemplate.bind({});
Error.args = {
  label: 'Input with Error',
  placeholder: 'Placeholder',
  error: true,
};

export const WithHint = BaseTemplate.bind({});
WithHint.args = {
  label: 'Input with Hint',
  placeholder: 'Placeholder',
  hint: 'Enter a valid email address',
};

export const WithCharacterCount = BaseTemplate.bind({});
WithCharacterCount.args = {
  label: 'Input with Character Count',
  placeholder: 'Enter your message',
  maxLength: 100,
  showCharacterCount: true,
};

export const CustomWidth = BaseTemplate.bind({});
CustomWidth.args = {
  label: 'Input with Custom Width',
  placeholder: 'Placeholder',
  width: 200,
};

export const Textarea = BaseTemplate.bind({});
Textarea.args = {
  label: 'Textarea',
  placeholder: 'Enter your message',
  hint: 'Large text large text large text large text large text',
  maxLength: 200,
  showCharacterCount: true,
  type: 'textarea',
};
