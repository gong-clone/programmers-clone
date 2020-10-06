import React, { FC } from 'react'
import styled from 'Application/Theme'

const TabImgFeatureDivHide = styled.div`
  /* .our-feature .tab-img-feature */
  display: none;
  opacity: 0;
`

const TabImgFeatureDivShow = styled.div`
  /* .our-feature .tab-img-feature.active */
  display: block;
  opacity: 1;
`

const TabImgFeatureImage = styled.img`
  vertical-align: middle;
  border-style: none;
  width: 100%;
`
export interface FeatureProps {
  src: string
  isActive: boolean
}

const TabImgFeature: FC<FeatureProps> = ({ src, isActive }) => {
  const TabImgFeatureDiv = isActive ? (
    <TabImgFeatureDivShow>
      <TabImgFeatureImage src={src} />
    </TabImgFeatureDivShow>
  ) : (
    <TabImgFeatureDivHide>
      <TabImgFeatureImage src={src} />
    </TabImgFeatureDivHide>
  )
  return <>{TabImgFeatureDiv}</>
}

export default TabImgFeature
