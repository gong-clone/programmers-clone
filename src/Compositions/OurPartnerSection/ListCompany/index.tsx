import React, { FC } from 'react'
import styled from 'Application/Theme'
import Ul from 'Components/Ul'
import ListCompanyItem, { Logo } from './ListCompanyItem'

const ListCompanyContainer = styled.div`
  max-width: 60.5rem;
  margin: 0 auto;
  padding-top: 5rem;
`

const ListCompanyTable = styled(Ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 5.5rem;
    z-index: 1;
    content: '';
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${(props) => props.theme.color.white} 100%
    );
  }

  &:after {
    content: '';
    display: block;
    clear: both;
  }

  @media (min-width: 992px) {
    & > li:nth-of-type(5n + 1) > div {
      border-left-width: 0.0625rem;
    }
  }
`

export interface ListCompanyProps {
  logoList: Logo[]
}

const ListCompany: FC<ListCompanyProps> = ({ logoList }) => (
  <ListCompanyContainer>
    <ListCompanyTable>
      {logoList.map((logo) => (
        <ListCompanyItem logo={logo} key={logo.name} />
      ))}
    </ListCompanyTable>
  </ListCompanyContainer>
)
export default ListCompany
