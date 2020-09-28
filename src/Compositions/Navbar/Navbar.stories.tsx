import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Navbar from '.'

export default {
  title: 'Compositions/Navbar',
  component: Navbar,
} as Meta

export const NavbarComposition: Story = () => <Navbar />
