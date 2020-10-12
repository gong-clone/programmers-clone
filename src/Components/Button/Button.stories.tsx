import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import styled from 'Application/Theme'
import Button, {
  PrimaryButton,
  LightPrimaryButton,
  OutlinePrimaryButton,
} from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      description: '버튼 텍스트',
      type: {
        required: true,
      },
      defaultValue: 'Button Component',
      control: 'text',
    },
    size: {
      description: '버튼의 크기',
      defaultValue: 'default',
      control: {
        type: 'select',
        options: ['default', 'md'],
      },
    },
  },
} as Meta

const ButtonStoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-bottom: 10px;
  }
`

export const ButtonComponent: Story = ({ children, size }) => {
  return (
    <ButtonStoryContainer>
      <Button size={size}>{children}</Button>
      <PrimaryButton size={size}>{children}</PrimaryButton>
      <LightPrimaryButton size={size}>{children}</LightPrimaryButton>
      <OutlinePrimaryButton size={size}>{children}</OutlinePrimaryButton>
    </ButtonStoryContainer>
  )
}
