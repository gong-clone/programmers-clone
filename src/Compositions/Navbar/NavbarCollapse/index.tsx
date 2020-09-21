import React, { FC } from 'react'
import styled from 'Application/Theme'

import NavbarGlobal from './NavbarGlobal'
import UserMenu from './UserMenu'

const NavbarCollapseDiv = styled.div`
  /* .navbar-collapse */
  flex-grow: 1;
  align-items: center;
  /* .navbar-expand-lg .navbar-collapse */
  display: flex !important;
  flex-basis: auto;
`
const NavbarCollapse: FC = () => {
  return (
    <NavbarCollapseDiv>
      <NavbarGlobal />
      <UserMenu />
    </NavbarCollapseDiv>
  )
}

export default NavbarCollapse
