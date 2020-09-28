import React, { FC } from 'react'
import styled from 'Application/Theme'

import HeroWrap from './HeroWrap'

const HeroSectionHeader = styled.header`
  display: block;
  /* .hero-section */
  position: relative;
  padding: 3.5rem 0 2.5rem 0;
  overflow: hidden;
  color: white;
  background-color: ${(props) => props.theme.color.dark};
`

const HeroSection: FC = () => {
  return (
    <HeroSectionHeader>
      <HeroWrap />
    </HeroSectionHeader>
  )
}

export default HeroSection
