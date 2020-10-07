import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import TabListFeature, { FeatureItemProps } from '.'

export default {
  title: 'Compositions/TabListFeature',
  component: TabListFeature,
} as Meta

export const TabListFeatureComposition: Story<FeatureItemProps> = ({
  onClick1,
  onClick2,
  onClick3,
  isActiveArr,
}) => (
  <TabListFeature
    onClick1={onClick1}
    onClick2={onClick2}
    onClick3={onClick3}
    isActiveArr={isActiveArr}
  />
)
