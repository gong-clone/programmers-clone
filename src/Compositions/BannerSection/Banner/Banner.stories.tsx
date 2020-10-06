import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Compositions/BannerSection/Banner',
  component: Banner,
  argTypes: {
    imgSrc: {
      description: '타이틀 왼쪽 이미지',
      control: 'text',
    },
    smallTitle: {
      description: '스몰 타이틀',
      type: {
        required: true,
      },
      defaultValue: '-',
      control: 'text',
    },
    title: {
      description: '타이틀',
      type: {
        required: true,
      },
      defaultValue: '-',
      control: 'object',
    },
    buttonText: {
      description: '버튼 텍스트',
      type: {
        required: true,
      },
      defaultValue: '-',
      control: 'text',
    },
  },
} as Meta

type StoryArgsType = BannerProps

export const BannerComposition: Story<StoryArgsType> = ({
  imgSrc,
  smallTitle,
  title,
  buttonText,
}) => (
  <Banner
    imgSrc={imgSrc}
    smallTitle={smallTitle}
    title={title}
    buttonText={buttonText}
  />
)
BannerComposition.args = {
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Fdeveloper-banner%2Fimg-write-profile-89ca8fe3e523f733bc478a2d22877953.png?alt=media&token=9b238ed9-46b2-41b3-9cb5-192285742e9c',
  smallTitle: '나에게 꼭 맞는 채용 기회',
  title: (
    <>
      개발자를 위한 다양한 필터 옵션으로 <b>나를 위한 포지션</b>을 찾아보세요.
    </>
  ),
  buttonText: '포지션 더보기',
}
