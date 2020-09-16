import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Li from 'Components/Li'
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
      defaultValue: ['Ul Component', 'Ul Component2'],
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
  <>
    {(typeof children === 'object' ? children : children.split(',')).map(
      (item: string) => {
        return (
          <Ul listStyle={listStyle} key={item}>
            <Li>{item}</Li>
          </Ul>
        )
      }
    )}
  </>
)
