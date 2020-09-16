import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Li from '.'

export default {
  title: 'Components/Li',
  component: Li,
  argTypes: {
    children: {
      description: '리스트 테스트',
      type: {
        required: true,
      },
      defaultValue: '접수 : 20년 08월 27일 14:00 - 11월 05일 18:00',
      control: 'text',
    },
    color: {
      description: '색깔 테스트',
      control: 'color',
      defaultValue: '#5F7F90',
    },
  },
} as Meta

export const UlComponent: Story = ({ children, color }) => (
  <Li color={color}>{children}</Li>
)
