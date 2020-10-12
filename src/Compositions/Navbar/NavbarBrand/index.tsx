import React, { FC } from 'react'
import styled from 'Application/Theme'

import Logo from './Logo'

const NavbarBrandA = styled.a`
  background-color: transparent;
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  text-decoration: none;
  cursor: pointer;
  /* .navbar-brand */
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  /* .navbar-dark .navbar-brand */
  color: ${(props) => props.theme.color.white};
`

const NavbarBrand: FC = () => {
  return (
    <NavbarBrandA href="/">
      <Logo />
    </NavbarBrandA>
  )
}

export default NavbarBrand
