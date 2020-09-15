import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react/types-6-0'
import { H1, H4 } from '.'

export default {
  title: 'Components/H',
  component: H1,
  argTypes: {
    children: {
      type: {
        required: true,
      },
      defaultValue: 'H Component',
      control: 'text',
    },
  },
} as Meta

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-bottom: 10px;
  }
`

interface StoryArgsType {
  children: ReactNode
}

export const HComponent: Story<StoryArgsType> = (args: StoryArgsType) => (
  <StoryContainer>
    <H1>{args.children}</H1>
    <H4>{args.children}</H4>
  </StoryContainer>
)
