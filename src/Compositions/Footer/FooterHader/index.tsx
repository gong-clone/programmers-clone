import React, { FC } from 'react'
import HStyle from 'Components/H'
import styled from 'Application/Theme'
import Ul from 'Components/Ul'
import Li from 'Components/Li'
import { FooterProps } from 'Types/footer'

const FooterHeader = styled.div`
  width: 100%;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px !important;
`

const H6 = styled.h6`
  ${HStyle}
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  margin-left: 0;
  color: ${(props) => props.theme.color.lightDark};
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
`

const Navbar = styled(Ul)`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  float: none;
  margin-top: 0.625rem;
`

const NavbarList = styled(Li)`
  display: table;
  margin: 0;
  padding: 0;
  font-size: 0.8125rem;
  color: ${(props) => props.theme.color.grayBlue};
  line-height: 1.25rem;
`

const FooterHeaderContainer: FC<FooterProps> = ({ FooterData }) => {
  return (
    <FooterHeader>
      <H6>{FooterData.Title}</H6>
      <Navbar>
        {FooterData.Navbar.map((navbar) => (
          <NavbarList key={navbar}>{navbar}</NavbarList>
        ))}
      </Navbar>
    </FooterHeader>
  )
}

export default FooterHeaderContainer
