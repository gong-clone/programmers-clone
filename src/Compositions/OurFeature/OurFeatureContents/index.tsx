import React, { FC, useState } from 'react'
import styled from 'Application/Theme'
import featureImg from 'Compositions/OurFeature/__fixture__/featureImg'
import TabListFeature from './TabListFeature'
import TabImgFeature from './TabImgFeature'

const OurFeatureContentsDiv = styled.div`
  /* .row */
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  /* .our-feature .our-feature-contents */
  margin-top: 5rem;
`
const OurFeatureContentsColumn = styled.div`
  /* .col-12 */
  position: relative;
  width: 100%;
  /* .col-lg-6 */
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 1rem;
  padding-left: 1rem;
`

const OurFeatureContents: FC = () => {
  const [activeImg1, setActiveImg1] = useState<boolean>(true)
  const [activeImg2, setActiveImg2] = useState<boolean>(false)
  const [activeImg3, setActiveImg3] = useState<boolean>(false)

  const [link1, link2, link3] = featureImg

  return (
    <OurFeatureContentsDiv>
      <OurFeatureContentsColumn>
        <TabListFeature
          onClick1={setActiveImg1}
          onClick2={setActiveImg2}
          onClick3={setActiveImg3}
          isActiveArr={[activeImg1, activeImg2, activeImg3]}
        />
      </OurFeatureContentsColumn>
      <OurFeatureContentsColumn>
        <TabImgFeature src={link1} isActive={activeImg1} />
        <TabImgFeature src={link2} isActive={activeImg2} />
        <TabImgFeature src={link3} isActive={activeImg3} />
      </OurFeatureContentsColumn>
    </OurFeatureContentsDiv>
  )
}

export default OurFeatureContents
