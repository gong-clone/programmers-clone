import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import NavItem, { NavItemProps, Divider } from '.'
import { jobItems, learnItems } from '../NavbarGlobal'
import { userItems } from '../UserMenu'

export default {
  title: 'Compositions/Navbar/NavbarCollapsed/NavItem',
  component: NavItem,
} as Meta

const Template = (args: NavItemProps) => (
  <NavItem key={args.id} desc={args.desc} link={args.link} />
)

export const NavbarGlobalLeftComponent: Story<NavItemProps> = Template.bind({})
const [jobItemsExample] = jobItems
NavbarGlobalLeftComponent.args = jobItemsExample

export const NavbarGlobalRightComponent: Story<NavItemProps> = Template.bind({})
const [learnItemsExample] = learnItems
NavbarGlobalRightComponent.args = learnItemsExample

export const UserMenuComponent: Story<NavItemProps> = Template.bind({})
const [userItemsExample] = userItems
UserMenuComponent.args = userItemsExample

export const DividerComponent: Story = () => <Divider />
