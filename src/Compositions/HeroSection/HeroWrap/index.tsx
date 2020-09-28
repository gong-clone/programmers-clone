import React, { FC } from 'react'
import styled from 'Application/Theme'

import DescHero from './DescHero'
import ImgHero from './ImgHero'

const HeroWrapDiv = styled.div`
  /* .container */
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  /* .row */
  display: flex;
  flex-wrap: wrap;
  /* @media (min-width: 1200px) .container */
  max-width: 1200px !important;
  /* .hero-section .hero-warp */
  padding-left: 0;
  padding-right: 0;
`
const HeroWrap: FC = () => {
  return (
    <HeroWrapDiv>
      <DescHero />
      <ImgHero />
    </HeroWrapDiv>
  )
}

export default HeroWrap
