import React, { FC } from 'react'
import styled from 'Application/Theme'

const TitleHeading1 = styled.h1`
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* h1, h2, h3, h4, h5, h6 */
  font-family: 'Inter', 'NotoSansKR', 'Helvetica Neue', Helvetica, Arial,
    '맑은 고딕', malgun gothic, '돋움', Dotum, sans-serif, 'Apple Color Emoji',
    'Noto Color Emoji';
  color: inherit;
  margin-top: 0;
  /* h1, .h1 */
  font-size: 40px;
  line-height: 1.4;
  letter-spacing: -0.009em;
  /* .hero-section .hero-warp .title */
  margin-bottom: 2.5rem;
  font-weight: 500;
`

const TitleSpan = styled.span`
  /* @media (min-width: 992px) .hero-section .hero-warp .title>span */
  display: block;
`

// 하드 코딩
const spanStr1 = '개발자 채용의 끝은,'
const spanStr2 = '결국 코드니까'

const Title: FC = () => {
  return (
    <TitleHeading1>
      <TitleSpan>{spanStr1}</TitleSpan>
      <TitleSpan>{spanStr2}</TitleSpan>
    </TitleHeading1>
  )
}

export default Title
