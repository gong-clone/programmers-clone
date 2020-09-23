import React, { FC } from 'react'
import styled from 'Application/Theme'
import { BannerListRightInfo } from 'Types/bannerSwiper'

const Right = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  width: 50%;
  text-align: center;
  height: 11.125rem;
  line-height: 11.125rem;
`

const Image = styled.img`
  vertical-align: middle;
  border-style: none;
  max-height: 11rem !important;
  max-width: 100%;
`

const RightContainer: FC<BannerListRightInfo> = ({ image }) => {
  return (
    <Right>
      <Image src={image} alt={image} />
    </Right>
  )
}

export default RightContainer
