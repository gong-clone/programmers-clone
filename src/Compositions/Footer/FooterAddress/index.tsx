import React, { FC } from 'react'
import styled from 'Application/Theme'
import { FooterProps } from 'Types/footer'

const FooterAddress = styled.div`
  margin-top: 1rem;
  font-size: 0.6875rem;
  line-height: 1.125rem;
  color: ${(props) => props.theme.color.veryLightGray};
`

const AddressDescription = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1rem;
  margin: 0;
  margin-bottom: 8px;
`

const AddressPhoneNumber = styled.p`
  margin: 0;
`

const FooterAddressContainer: FC<FooterProps> = ({ FooterData }) => {
  return (
    <FooterAddress>
      <AddressDescription>{FooterData.Description}</AddressDescription>
      {FooterData.PhoneNumber.map((phoneNumber) => (
        <AddressPhoneNumber key={phoneNumber}>{phoneNumber}</AddressPhoneNumber>
      ))}
    </FooterAddress>
  )
}

export default FooterAddressContainer
