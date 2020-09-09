import React, { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Pages/Main',
  component: Main,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta

interface StoryArgsType {
  text: ReactNode
}

export const DefaultMain: Story<StoryArgsType> = (args: StoryArgsType) => (
  <Main>{args.text}</Main>
)
