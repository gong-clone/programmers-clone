import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import TabImgFeature, { FeatureProps } from '.'

export default {
  title: 'Compositions/TabImgFeature',
  component: TabImgFeature,
} as Meta

export const TabImgFeatureComposition: Story<FeatureProps> = ({
  src,
  isActive,
}) => <TabImgFeature src={src} isActive={isActive} />
