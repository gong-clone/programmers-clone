import React, { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Container from '.'

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    children: {
      type: {
        required: true,
      },
      defaultValue: 'Container Component',
      control: 'text',
    },
  },
} as Meta

interface StoryArgsType {
  children: ReactNode
}

export const ContainerComponent: Story<StoryArgsType> = ({ children }) => (
  <Container>{children}</Container>
)
