import React, { FC } from 'react'
import styled from 'Application/Theme'
import LargeHeader from '../LargeHeader'
import OurFeatureContents from './OurFeatureContents'

const OurFeatureSection = styled.section`
  /* .our-feature */
  padding: 7.5rem 0;
`

const Container = styled.div`
  /* .container */
  width: 100%;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 16px;
  padding-right: 16px;
`

const OurFeature: FC = () => {
  const args = {
    mainSentence: (
      <>
        우리의 관심은, 당신의 <span>코드</span>
      </>
    ),
    description:
      '프로그래머스는 당신이 더 나은 코드를 쓸 수 있도록, 이렇게 도와드립니다.',
  }

  return (
    <OurFeatureSection>
      <Container>
        <LargeHeader
          mainSentence={args.mainSentence}
          description={args.description}
        />
        <OurFeatureContents />
      </Container>
    </OurFeatureSection>
  )
}

export default OurFeature
