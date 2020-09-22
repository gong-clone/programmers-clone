import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import SwiperWrapper from '.'

export default {
  title: 'Compositions/SwiperContainer/SwiperWrapper',
  component: SwiperWrapper,
} as Meta

export const ContainerComponent: Story = () => <SwiperWrapper />
