import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Radio, RadioGroupProps } from '.';

export default {
  title: 'Components/Radio',
  component: Radio.Group,
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    warning: {
      control: { type: 'boolean' },
    },
    success: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Radio.Group>;

const Template: StoryFn<typeof Radio.Group> = (args) => (
  <Radio.Group {...args}>
    <Radio.Option value="option1">Option 1</Radio.Option>
    <Radio.Option value="option2">Option 2</Radio.Option>
    <Radio.Option value="option3">Option 3</Radio.Option>
  </Radio.Group>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Group Label',
};

const GearIcon = (
  <svg viewBox="0 0 32 32">
    <g>
      <path
        fill="#231f20"
        d="m27.92 18.46-1.14-.92a.86.86 0 0 1-.31-.65V15.2a.83.83 0 0 1 .31-.65l1.11-.89a2.86 2.86 0 0 0 .65-3.66l-1.12-1.88a2.76 2.76 0 0 0-3.21-1.22l-1.82.58a.73.73 0 0 1-.64-.09l-1.23-.81a.8.8 0 0 1-.36-.58l-.24-1.6A2.77 2.77 0 0 0 17.18 2h-2.25a2.79 2.79 0 0 0-2.77 2.51L12 6a.8.8 0 0 1-.41.63L10 7.48a.79.79 0 0 1-.67 0L8.08 7a2.75 2.75 0 0 0-3.46 1.1L3.48 10a2.84 2.84 0 0 0 .57 3.64l1.35 1.11a.87.87 0 0 1 .29.62v1.27a.87.87 0 0 1-.28.65L4 18.61a2.85 2.85 0 0 0-.57 3.52l1 1.84a2.77 2.77 0 0 0 3.42 1.22l1.62-.63a.73.73 0 0 1 .66.05l1.4.84a.76.76 0 0 1 .38.55l.32 1.66A2.81 2.81 0 0 0 15 29.94h2.15a2.79 2.79 0 0 0 2.75-2.39l.26-1.65a.85.85 0 0 1 .4-.6l1.3-.74a.78.78 0 0 1 .65 0l1.64.63a2.76 2.76 0 0 0 3.37-1.2l1.08-1.83a2.86 2.86 0 0 0-.68-3.7zm-1.07 2.64-1.08 1.83a.78.78 0 0 1-.94.34l-1.64-.63a2.77 2.77 0 0 0-2.35.19l-1.3.74a2.81 2.81 0 0 0-1.39 2l-.26 1.66a.78.78 0 0 1-.77.69H15a.79.79 0 0 1-.77-.66l-.32-1.66a2.81 2.81 0 0 0-1.33-1.89l-1.4-.84a2.73 2.73 0 0 0-1.41-.39 2.91 2.91 0 0 0-1 .19l-1.62.64a.77.77 0 0 1-1-.35l-1-1.84a.84.84 0 0 1 .16-1l1.48-1.32a2.87 2.87 0 0 0 .94-2.17v-1.27a2.9 2.9 0 0 0-1-2.11l-1.37-1.17A.85.85 0 0 1 5.19 11l1.14-1.86a.76.76 0 0 1 1-.32l1.25.53A2.72 2.72 0 0 0 11 9.23l1.61-.89A2.81 2.81 0 0 0 14 6.17l.16-1.46a.79.79 0 0 1 .77-.71h2.24a.79.79 0 0 1 .78.7l.23 1.61a2.85 2.85 0 0 0 1.24 2l1.23.8a2.72 2.72 0 0 0 2.35.27l1.82-.57a.76.76 0 0 1 .89.34L26.83 11a.86.86 0 0 1-.19 1.09l-1.11.91a2.84 2.84 0 0 0-1.06 2.22v1.69a2.81 2.81 0 0 0 1.05 2.2l1.14.92a.86.86 0 0 1 .19 1.07z"
      />
      <path d="M16 11a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3.07z" />
    </g>
  </svg>
);

const CartIcon = (
  <svg viewBox="0 0 32 32">
    <g>
      <path
        fill="#231f20"
        d="M29.46 10.14A2.94 2.94 0 0 0 27.1 9H10.22L8.76 6.35A2.67 2.67 0 0 0 6.41 5H3a1 1 0 0 0 0 2h3.41a.68.68 0 0 1 .6.31l1.65 3 .86 9.32a3.84 3.84 0 0 0 4 3.38h10.37a3.92 3.92 0 0 0 3.85-2.78l2.17-7.82a2.58 2.58 0 0 0-.45-2.27zM28 11.86l-2.17 7.83A1.93 1.93 0 0 1 23.89 21H13.48a1.89 1.89 0 0 1-2-1.56L10.73 11H27.1a1 1 0 0 1 .77.35.59.59 0 0 1 .13.51z"
      />
      <circle cx="14" cy="26" r="2" />
      <circle cx="24" cy="26" r="2" />
    </g>
  </svg>
);

const DeliveryIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="m29.59 13.21-3.9-3.85A1.31 1.31 0 0 0 24.8 9H19V6.38A1.3 1.3 0 0 0 17.81 5H3.21A1.3 1.3 0 0 0 2 6.38v14.24A1.3 1.3 0 0 0 3.21 22H4a2.74 2.74 0 0 0 0 .5 3.5 3.5 0 0 0 7 0 2.74 2.74 0 0 0 0-.5h10a2.74 2.74 0 0 0 0 .5 3.5 3.5 0 0 0 7 0 2.74 2.74 0 0 0 0-.5h.74A1.35 1.35 0 0 0 30 20.61v-6.4a1.4 1.4 0 0 0-.41-1zM7.5 24A1.5 1.5 0 0 1 6 22.5a1.39 1.39 0 0 1 .09-.5 1.4 1.4 0 0 1 .69-.8 1.64 1.64 0 0 1 .33-.14A1.58 1.58 0 0 1 7.5 21a1.5 1.5 0 0 1 0 3zm2.44-4a3.48 3.48 0 0 0-4.88 0H4V7h13v13zM26 22.5a1.5 1.5 0 1 1-1.5-1.5 1.27 1.27 0 0 1 .39.06 1.46 1.46 0 0 1 1 .94 1.39 1.39 0 0 1 .11.5zm2-2.5h-1.06a3.48 3.48 0 0 0-4.87 0H19v-9h5.57L28 14.53z" />
  </svg>
);

export const WithIcon: StoryFn<RadioGroupProps> = (args) => (
  <Radio.Group {...args}>
    <Radio.Option value="option1" icon={GearIcon}>
      Option 1
    </Radio.Option>
    <Radio.Option value="option2" icon={CartIcon}>
      Option 2
    </Radio.Option>
    <Radio.Option value="option3" icon={DeliveryIcon}>
      Option 3
    </Radio.Option>
  </Radio.Group>
);

WithIcon.args = {
  label: 'Radio Group with Icon',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio Group',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Radio Group with Error',
  status: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Radio Group with Warning',
  status: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Radio Group with Success',
  status: 'success',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: 'Size Medium',
  size: 'md',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: 'Size Large',
  size: 'lg',
};
