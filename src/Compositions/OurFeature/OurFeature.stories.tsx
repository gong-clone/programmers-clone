import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import OurFeature from '.'

export default {
  title: 'Compositions/OurFeature',
  component: OurFeature,
} as Meta

export const OurFeatureComposition: Story = () => <OurFeature />
