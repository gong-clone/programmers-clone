import React, { FC, ReactNode } from 'react'
import styled from 'Application/Theme'
import Container from 'Components/Container'
import { PrimaryButton } from 'Components/Button'
import BannerTitle from './BannerTitle'

const StyledBanner = styled(Container)``

const BannerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MoreButton = styled(PrimaryButton)``

export interface BannerProps {
  imgSrc?: string
  smallTitle: string
  title: ReactNode
  buttonText: string
}

const Banner: FC<BannerProps> = ({ imgSrc, smallTitle, title, buttonText }) => (
  <StyledBanner>
    <BannerWrap>
      <BannerTitle imgSrc={imgSrc} smallTitle={smallTitle} title={title} />
      <MoreButton>{buttonText}</MoreButton>
    </BannerWrap>
  </StyledBanner>
)

export default Banner
