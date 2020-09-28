import React, { FC } from 'react'
import styled from 'Application/Theme'
import Li from 'Components/Li'

const ListCompanyItemContainer = styled(Li)`
  list-style: none;
  float: left;
  padding: 0;
  width: 20%;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
`

const FrameLogo = styled.div`
  position: relative;
  padding: 1rem;
  margin-top: -0.0625rem;
  border: 0.0625rem solid ${(props) => props.theme.color.blueGray};
  border-bottom: 0;
  border-width: 0.0625rem 0.0625rem 0.0625rem 0;
  box-sizing: content-box;
  text-align: center;
`

const LogoImage = styled.img`
  vertical-align: middle;
  border-style: none;
  width: 100%;
  max-width: 10rem;
  height: auto;
  max-height: 2.5rem;
`

export type Logo = {
  name: string
  imgSrc: string
}
export interface ListCompanyItemProps {
  logo: Logo
}

const ListCompanyItem: FC<ListCompanyItemProps> = ({ logo }) => (
  <ListCompanyItemContainer>
    <FrameLogo>
      <LogoImage src={logo.imgSrc} alt={logo.name} />
    </FrameLogo>
  </ListCompanyItemContainer>
)
export default ListCompanyItem
