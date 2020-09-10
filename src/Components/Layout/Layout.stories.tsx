import React, { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Layout from '.'

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    children: {
      type: {
        required: true,
      },
      defaultValue: 'Layout Component',
      control: 'text',
    },
  },
} as Meta

interface StoryArgsType {
  children: ReactNode
}

export const LayoutComponent: Story<StoryArgsType> = (args: StoryArgsType) => (
  <Layout>{args.children}</Layout>
)
