import React, { FC } from 'react'
import { css } from '@emotion/core'
import styled from 'Application/Theme'
import { BannerProps } from 'Compositions/BannerSection/Banner'
import { ThemeType } from 'Types/theme'
import Banner from './Banner'

type BannerSectionBackgroundType = 'default' | 'dark'

const DefaultBackground = (theme: ThemeType) => css`
  background-color: ${theme.color.mildGray};
  padding: 2rem 0;
`

const DarkBackground = (theme: ThemeType) => css`
  margin-bottom: -5rem;
  padding: 2rem 0;
  background: linear-gradient(
        90deg,
        ${theme.color.dark} 1.3125rem,
        transparent 1%
      )
      center,
    linear-gradient(${theme.color.dark} 1.3125rem, transparent 1%) center,
    ${theme.color.primary};
  background-size: 1.5rem 1.5rem;
  color: ${theme.color.white};
  position: relative;
`

interface StyledBannerSectionProps {
  backgroundType?: BannerSectionBackgroundType
}
const StyledBannerSection = styled.section<StyledBannerSectionProps>`
  ${(props) => {
    switch (props.backgroundType) {
      case 'dark':
        return DarkBackground(props.theme)
      default:
        return DefaultBackground(props.theme)
    }
  }}
`

export interface BannerSectionProps
  extends BannerProps,
    StyledBannerSectionProps {}

const BannerSection: FC<BannerSectionProps> = ({
  backgroundType,
  imgSrc,
  smallTitle,
  title,
  buttonText,
}) => (
  <StyledBannerSection backgroundType={backgroundType}>
    <Banner
      imgSrc={imgSrc}
      title={title}
      smallTitle={smallTitle}
      buttonText={buttonText}
    />
  </StyledBannerSection>
)

export default BannerSection
