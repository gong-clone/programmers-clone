import React, { FC } from 'react'
import styled from 'Application/Theme'
import featureList from 'Compositions/OurFeature/__fixture__/featureList'
import TabFeatureItem from './TabFeatureItem'

const TabFeatureList = styled.ul`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  /* .our-feature .our-feature-contents .tab-list-feature */
  list-style: none;
  padding: 0;
  margin: 0;
`
export interface FeatureItemProps {
  onClick1: (isActive: boolean) => void
  onClick2: (isActive: boolean) => void
  onClick3: (isActive: boolean) => void
  isActiveArr: Array<boolean>
}

const TabListFeature: FC<FeatureItemProps> = ({
  onClick1,
  onClick2,
  onClick3,
  isActiveArr,
}) => {
  const [activeImg1, activeImg2, activeImg3] = isActiveArr
  const [feature1, feature2, feature3] = featureList

  const handleActive1 = () => {
    onClick1(true)
    onClick2(false)
    onClick3(false)
  }

  const handleActive2 = () => {
    onClick1(false)
    onClick2(true)
    onClick3(false)
  }

  const handleActive3 = () => {
    onClick1(false)
    onClick2(false)
    onClick3(true)
  }

  return (
    <TabFeatureList>
      <TabFeatureItem
        onClick={handleActive1}
        isActive={activeImg1}
        feature={feature1}
      />
      <TabFeatureItem
        onClick={handleActive2}
        isActive={activeImg2}
        feature={feature2}
      />
      <TabFeatureItem
        onClick={handleActive3}
        isActive={activeImg3}
        feature={feature3}
      />
    </TabFeatureList>
  )
}

export default TabListFeature
