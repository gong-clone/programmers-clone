import React, { FC } from 'react'
import styled from 'Application/Theme'

import Cap from './Cap'
import Title from './Title'
import SubTitle from './SubTitle'
import BtnStart from './BtnStart'

const DescHeroDiv = styled.div`
  /* .col-12 */
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  /* .col-lg-6 */
  flex: 0 0 50%;
  max-width: 50%;
`

const DescHero: FC = () => {
  return (
    <DescHeroDiv>
      <Cap />
      <Title />
      <SubTitle />
      <BtnStart />
    </DescHeroDiv>
  )
}

export default DescHero
