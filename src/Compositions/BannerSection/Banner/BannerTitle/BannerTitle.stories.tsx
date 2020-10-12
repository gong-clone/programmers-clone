import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import BannerTitle, { BannerTitleProps } from '.'

export default {
  title: 'Compositions/BannerSection/Banner/BannerTitle',
  component: BannerTitle,
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
  },
} as Meta

type StoryArgsType = BannerTitleProps

export const DefaultBannerTitle: Story<StoryArgsType> = ({
  imgSrc,
  smallTitle,
  title,
}) => <BannerTitle imgSrc={imgSrc} smallTitle={smallTitle} title={title} />
DefaultBannerTitle.args = {
  smallTitle: 'JOIN OUR TEAM',
  title:
    '프로그래머스에 합류해 개발자 채용 문화의 혁신을 이끌어나가는 에너지의 주체가 되어보세요!',
}

export const ImagedBannerTitle: Story<StoryArgsType> = ({
  imgSrc,
  smallTitle,
  title,
}) => <BannerTitle imgSrc={imgSrc} smallTitle={smallTitle} title={title} />
ImagedBannerTitle.args = {
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Fdeveloper-banner%2Fimg-write-profile-89ca8fe3e523f733bc478a2d22877953.png?alt=media&token=9b238ed9-46b2-41b3-9cb5-192285742e9c',
  smallTitle: '나에게 꼭 맞는 채용 기회',
  title: (
    <>
      개발자를 위한 다양한 필터 옵션으로 <b>나를 위한 포지션</b>을 찾아보세요.
    </>
  ),
}
