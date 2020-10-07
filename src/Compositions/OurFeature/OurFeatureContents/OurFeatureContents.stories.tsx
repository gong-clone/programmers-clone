import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import OurFeatureContents from '.'

export default {
  title: 'Compositions/OurFeatureContents',
  component: OurFeatureContents,
} as Meta

export const OurFeatureContentsComposition: Story = () => <OurFeatureContents />
