import React, { FC } from 'react'
import styled from 'Application/Theme'

const SubTitleHeading4 = styled.h4`
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  -webkit-font-smoothing: antialiased;
  /* h1, h2, h3, h4, h5, h6 */
  font-family: 'Inter', 'NotoSansKR', 'Helvetica Neue', Helvetica, Arial,
    '맑은 고딕', malgun gothic, '돋움', Dotum, sans-serif, 'Apple Color Emoji',
    'Noto Color Emoji';
  margin-top: 0;
  /* h4, .h4 */
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  /* .hero-section .hero-warp .sub-title */
  margin-bottom: 2rem;
  color: ${(props) => props.theme.color.moreLightGray};
  font-weight: 300;
`
// 하드 코딩
const subTitleStr1 = '이력서보다, 당신의 코드가 우선시되는'
const subTitleStr2 = '프로그래머스만의 채용 프로그램을 만나보세요.'

const SubTitle: FC = () => {
  return (
    <SubTitleHeading4>
      {subTitleStr1}
      <br />
      {subTitleStr2}
    </SubTitleHeading4>
  )
}

export default SubTitle
