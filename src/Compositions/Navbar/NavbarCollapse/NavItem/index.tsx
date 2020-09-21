import React, { FC } from 'react'
import styled from 'Application/Theme'

const NavItemLi = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
`

const NavLinkA = styled.a`
  background-color: transparent;
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  text-decoration: none;
  cursor: pointer;
  /* .nav-link */
  display: block;
  padding: 0.25rem 1rem;
  /* .navbar-expand-lg .navbar-nav .nav-link */
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  /* .navbar-dark .navbar-nav .nav-link */
  color: #b2c0cc;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.color.white};
    text-decoration: none;
    outline: 0;
  }

  &:focus {
    color: ${(props) => props.theme.color.white};
    text-decoration: none;
    outline: 0;
  }
`

export interface NavItemProps {
  id?: string
  link: string
  desc: string
}

const NavItem: FC<NavItemProps> = ({ link, desc }) => {
  return (
    <NavItemLi>
      <NavLinkA href={link}>{desc}</NavLinkA>
    </NavItemLi>
  )
}

const Divider = styled.li`
  width: 0.0625rem;
  height: 0.75rem;
  background-color: #44576c;
  margin: 0.6875rem 0.5rem 0 0.5rem;
`

export { Divider }
export default NavItem
