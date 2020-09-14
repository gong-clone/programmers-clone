import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Li from 'Components/Li'
import Ul from '.'

export default {
  title: 'Components/Ul',
  component: Ul,
  argTypes: {
    children: {
      type: {
        required: true,
      },
      defaultValue: 'Ul Component',
      control: 'text',
    },
    listStyle: {
      description: '리스트 스타일',
      control: {
        type: 'select',
        options: ['none', 'disc', 'circle'],
      },
    },
  },
} as Meta

export const UlComponent: Story = ({ children, listStyle }) => (
  <Ul listStyle={listStyle}>
    <Li>{children}</Li>
  </Ul>
)
