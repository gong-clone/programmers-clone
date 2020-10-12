import React, { FC } from 'react'
import styled from 'Application/Theme'

const CapHeading6 = styled.h6`
  display: block;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* h1, h2, h3, h4, h5, h6 */
  font-family: 'Inter', 'NotoSansKR', 'Helvetica Neue', Helvetica, Arial,
    '맑은 고딕', malgun gothic, '돋움', Dotum, sans-serif, 'Apple Color Emoji',
    'Noto Color Emoji';
  margin-top: 0;
  /* h6, .h6 */
  font-size: 14px;
  line-height: 1.5;
  /* .hero-section .hero-warp .cap */
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.blue};
  font-weight: 500;
`

// 하드 코딩
const capStr = '기술 중심 개발자 채용 플랫폼'

const Cap: FC = () => {
  return <CapHeading6>{capStr}</CapHeading6>
}

export default Cap
