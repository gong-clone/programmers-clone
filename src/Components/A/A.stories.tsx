import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import styled from 'Application/Theme'

import A from '.'

export default {
  title: 'Component/A',
  component: A,
  argTypes: {
    children: {
      description: 'a태그 텍스트',
      type: {
        required: true,
      },
      defaultValue: 'A tag',
      control: 'text',
    },
  },
} as Meta

const AStoryContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-bottom: 10px;
  }
`

export const AComponent: Story = ({ children }) => {
  return (
    <AStoryContainer>
      <A>{children}</A>
    </AStoryContainer>
  )
}
