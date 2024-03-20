import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Text, type TextProps } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default text',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  children: 'This is a small text',
  size: 'sm',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  children: 'This is a medium text',
  size: 'md',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: 'This is a large text',
  size: 'lg',
};
