import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Ul from '.'

export default {
  title: 'Components/Ul',
  component: Ul,
  argTypes: {
    children: {
      description: '유저 리스트 테스트',
      type: {
        required: true,
      },
      defaultValue: 'Ul Component',
      control: 'text',
    },
  },
} as Meta

export const UlComponent: Story = ({ children }) => <Ul>{children}</Ul>
