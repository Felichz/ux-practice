import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button, type ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    kind: {
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ButtonProps>;

const BaseTemplate: StoryFn<ButtonProps> = (args) => <Button {...args} />;

const AllButtonsTemplate: StoryFn<ButtonProps> = (args) => (
  <>
    <Button {...args} kind="primary" />
    <br />
    <Button {...args} kind="secondary" />
    <br />
    <Button {...args} kind="success" />
    <br />
    <Button {...args} kind="warning" />
    <br />
    <Button {...args} kind="destructive" />
    <br />
    <Button {...args} disabled />
    <br />
  </>
);

export const KindPrimary = BaseTemplate.bind({});
KindPrimary.args = {
  label: 'Kind Primary',
  onClick: () => console.log('Primary button clicked'),
};

export const KindSecondary = BaseTemplate.bind({});
KindSecondary.args = {
  label: 'Kind Secondary',
  kind: 'secondary',
  onClick: () => console.log('Secondary button clicked'),
};

export const KindTertiary = BaseTemplate.bind({});
KindTertiary.args = {
  label: 'Kind Tertiary',
  kind: 'tertiary',
  onClick: () => console.log('Tertiary button clicked'),
};

export const KindSuccess = BaseTemplate.bind({});
KindSuccess.args = {
  label: 'Kind Success',
  kind: 'success',
  onClick: () => console.log('Success button clicked'),
};

export const KindWarning = BaseTemplate.bind({});
KindWarning.args = {
  label: 'Kind Warning',
  kind: 'warning',
  onClick: () => console.log('Warning button clicked'),
};

export const KindDestructive = BaseTemplate.bind({});
KindDestructive.args = {
  label: 'Kind Destructive',
  kind: 'destructive',
  onClick: () => console.log('Destructive button clicked'),
};

export const Disabled = BaseTemplate.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
  onClick: () => console.log('Disabled button clicked'),
};

export const Loading = BaseTemplate.bind({});
Loading.args = {
  label: 'Loading Button',
  loading: true,
};

export const SizeLarge = AllButtonsTemplate.bind({});
SizeLarge.args = {
  label: 'Size Large',
  size: 'lg',
  onClick: () => console.log('Large button clicked'),
};

export const SizeMedium = AllButtonsTemplate.bind({});
SizeMedium.args = {
  label: 'Size Medium',
  size: 'md',
  onClick: () => console.log('Medium button clicked'),
};

export const SizeSmall = AllButtonsTemplate.bind({});
SizeSmall.args = {
  label: 'Size Small',
  size: 'sm',
  onClick: () => console.log('Small button clicked'),
};

const SvgIcon = (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"
    />
  </svg>
);

export const WithIcon = BaseTemplate.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  onClick: () => console.log('Button with icon clicked'),
  icon: SvgIcon,
};
