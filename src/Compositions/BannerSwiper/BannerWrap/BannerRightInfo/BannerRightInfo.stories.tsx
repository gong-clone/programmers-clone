import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { dummyBannerList } from '__fixtures__/BannerSwiper'
import BannerRightInfo from '.'

export default {
  title: 'Compositions/BannerWrap/BannerRightInfo',
  component: BannerRightInfo,
  argTypes: {
    imagePath: {
      description: '이미지 경로',
      type: {
        required: true,
      },
      defaultValue: dummyBannerList[0].image,
      control: 'text',
    },
    imageAlt: {
      description: '이미지 설명',
      type: {
        required: true,
      },
      defaultValue: dummyBannerList[0].label,
      control: 'text',
    },
  },
} as Meta

export const BannerRightInfoComponent: Story = ({ imagePath, imageAlt }) => (
  <BannerRightInfo imagePath={imagePath} imageAlt={imageAlt} />
)
