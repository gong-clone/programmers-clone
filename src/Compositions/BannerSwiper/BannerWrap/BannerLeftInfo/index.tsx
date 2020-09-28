import React, { FC } from 'react'
import styled from 'Application/Theme'
import HStyle from 'Components/H'
import { BannerListLeftInfo } from 'Types/bannerSwiper'

const Left = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  width: 50%;
  padding: 1.5rem 0;
`

const Header6 = styled.h6`
  ${HStyle}
  color: white;
  font-size: 12px;
  line-height: 1.5;
  opacity: 1;
  margin: 0 0 0.5rem 0;
`

const Header4 = styled.h4`
  ${HStyle}
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  color: white;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const Header5 = styled.h5`
  ${HStyle}
  letter-spacing: -0.009em;
  opacity: 0.64;
  line-height: 1.6;
  color: white;
  font-size: 0.9375rem;
  margin-top: 3.5rem;
`

const LeftContainer: FC<BannerListLeftInfo> = ({ banner, className }) => (
  <Left className={className}>
    <Header6>{banner.label}</Header6>
    <Header4>{banner.headline}</Header4>
    <Header5>
      {banner.period.up}
      <br />
      {banner.period.down}
    </Header5>
  </Left>
)

export default LeftContainer
