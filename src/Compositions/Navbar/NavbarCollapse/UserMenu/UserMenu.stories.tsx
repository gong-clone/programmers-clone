import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import UserMenu from '.'

export default {
  title: 'Compositions/Navbar/NavbarCollapsed/UserMenu',
  component: UserMenu,
} as Meta

export const UserMenuComponent: Story = () => <UserMenu />
