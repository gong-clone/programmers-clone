import React, { FC } from 'react'
import styled from 'Application/Theme'

import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'

const NavBarDiv = styled.div`
  /* .navbar */
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.375rem 1rem;
  /* .navbar-expand-lg */
  flex-flow: row nowrap;
  justify-content: flex-start;
  /* .navbar-dark */
  background-color: #0c151c;
`

const Navbar: FC = () => {
  return (
    <NavBarDiv>
      <NavbarBrand />
      <NavbarCollapse />
    </NavBarDiv>
  )
}

export default Navbar
