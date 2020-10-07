import React, { FC, ReactNode } from 'react'
import styled from 'Application/Theme'
import H from 'Components/H'

interface TitleWrapProps {
  existImg: boolean
}

const TitleWrap = styled.div<TitleWrapProps>`
  position: relative;
  padding-left: ${(props) => (props.existImg ? '6.25rem' : '0')};
`

const TitleImage = styled.img`
  position: absolute;
  top: -0.625rem;
  left: 0;
  width: 4.75rem;
  height: 4.75rem;
`

const ImagedSmallTitle = styled.h6`
  ${H}

  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.blue};
`

const ImagedTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;

  & > b {
    font-weight: 500;
    box-shadow: inset 0 -0.5rem ${(props) => props.theme.color.yellow};
  }
`

const SmallTitle = styled.p`
  line-height: 1.6;
  letter-spacing: -0.1px;
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.blue};
`

const Title = styled.h5`
  ${H}

  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.009em;
`

export interface BannerTitleProps {
  imgSrc?: string
  smallTitle: string
  title: ReactNode
}

const BannerTitle: FC<BannerTitleProps> = ({ imgSrc, smallTitle, title }) => (
  <TitleWrap existImg={!!imgSrc}>
    {imgSrc ? (
      <>
        <TitleImage src={imgSrc} alt={`${smallTitle} - banner`} />
        <ImagedSmallTitle>{smallTitle}</ImagedSmallTitle>
        <ImagedTitle>{title}</ImagedTitle>
      </>
    ) : (
      <>
        <SmallTitle>{smallTitle}</SmallTitle>
        <Title>{title}</Title>
      </>
    )}
  </TitleWrap>
)

export default BannerTitle
