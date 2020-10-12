import React, { FC } from 'react'
import styled from 'Application/Theme'

const ImgHeroDiv = styled.div`
  display: block;
  /* .col-12 */
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  /* @media (min-width: 992px) .col-lg-6 */
  flex: 0 0 50%;
  max-width: 50%;
  /* .hero-section .img-hero */
  position: relative;
`
const ImgHeroImg = styled.img`
  vertical-align: middle;
  border-style: none;
  /* .hero-section .img-hero img */
  position: relative;
  width: auto;
  max-height: 21.875rem;
  z-index: 2;
`

// 하드 코딩
const imgSrc =
  'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Fhero-section%2Fhero-section.png?alt=media&token=8810dcd7-17bc-496e-98a1-ddd15a96690b'

const ImgHero: FC = () => {
  return (
    <ImgHeroDiv>
      <ImgHeroImg src={imgSrc} />
    </ImgHeroDiv>
  )
}

export default ImgHero
