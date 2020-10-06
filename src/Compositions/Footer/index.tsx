import React, { FC } from 'react'
import styled from 'Application/Theme'
import { FooterData } from '__fixtures__/Footer'
import FooterHeaderContainer from './FooterHader'
import FooterAddressContainer from './FooterAddress'

const Footer = styled.footer`
  box-shadow: inset 0 0.0625rem 0 0 ${(props) => props.theme.color.lightGray};
  padding: 2.5rem 0;
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100%;
  max-width: 100%;
`

const Conatiner = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`

const FooterWrap = styled.div`
  margin-top: 5rem !important;
  height: 21.125rem;
`

const FooterContainer: FC = () => {
  return (
    <FooterWrap>
      <Footer>
        <Conatiner>
          <FooterHeaderContainer FooterData={FooterData} />
          <FooterAddressContainer FooterData={FooterData} />
        </Conatiner>
      </Footer>
    </FooterWrap>
  )
}

export default FooterContainer
