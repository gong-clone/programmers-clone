import React, { FC, HTMLProps, ReactNode } from 'react'
import styled from '@emotion/styled'
import HStyle from 'Components/H'

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

interface Banners {
  id: string // Banners id
  label: string // 36. 배너 라벨
  headline: ReactNode // 37. 배너 헤드라인
  period: {
    // 38. 배너 설명
    up: string
    down: string
  }
  image: string // 39. 배너 이미지
}

interface BannerListLeftInfo extends HTMLProps<HTMLDivElement> {
  banner: Banners
}

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
