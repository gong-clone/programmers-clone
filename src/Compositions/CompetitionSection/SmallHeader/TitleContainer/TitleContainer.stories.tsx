import React, { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import TitleContainer from '.'

export default {
  title: 'Compositions/CompetitionSection/SmallHeader/TitleContainer',
  component: TitleContainer,
  argTypes: {
    children: {
      type: {
        required: true,
      },
      defaultValue: 'TitleContainer Component',
      control: 'text',
    },
  },
} as Meta

interface StoryArgsType {
  children: ReactNode
}

export const ContainerComponent: Story<StoryArgsType> = ({ children }) => (
  <TitleContainer>{children}</TitleContainer>
)
