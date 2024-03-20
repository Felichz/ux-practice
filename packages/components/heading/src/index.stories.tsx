import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Heading, type HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    level: {
      options: ['1', '2', '3', '4', '5', '6'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta<HeadingProps>;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Heading',
  level: 1,
};

export const Level1 = Template.bind({});
Level1.args = {
  children: 'Level 1 Heading',
  level: 1,
};

export const Level2 = Template.bind({});
Level2.args = {
  children: 'Level 2 Heading',
  level: 2,
};

export const Level3 = Template.bind({});
Level3.args = {
  children: 'Level 3 Heading',
  level: 3,
};

export const Level4 = Template.bind({});
Level4.args = {
  children: 'Level 4 Heading',
  level: 4,
};

export const Level5 = Template.bind({});
Level5.args = {
  children: 'Level 5 Heading',
  level: 5,
};

export const Level6 = Template.bind({});
Level6.args = {
  children: 'Level 6 Heading',
  level: 6,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  children: 'Small Heading',
  level: 1,
  size: 'sm',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  children: 'Medium Heading',
  level: 1,
  size: 'md',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: 'Large Heading',
  level: 1,
  size: 'lg',
};
