import React from 'react'
import styled from 'Application/Theme'
import { Meta, Story } from '@storybook/react/types-6-0'
import { dummyBannerList } from '__fixtures__/BannerSwiper'
import BannerLeftInfo from '.'

export default {
  title: 'Compositions/BannerWrap/BannerLeftInfo',
  component: BannerLeftInfo,
  argTypes: {
    banner: {
      description: '배너 정보',
      type: {
        required: true,
      },
      defaultValue: dummyBannerList[0],
      control: 'object',
    },
  },
} as Meta

const BannerLeftInfoTestContainer = styled(BannerLeftInfo)`
  /*
    기존의 배경이 어두운색이라 글자 색깔이 흰색으로 되어있습니다.
    하지만 스토리북의 경우 배경이 흰색이기 때문에,
    글자색을 검은색으로 변경하여 테스트 진행했습니다.
  */
  & > * {
    color: black;
  }
`

export const BannerRightInfoComponent: Story = ({ banner }) => (
  <BannerLeftInfoTestContainer banner={banner} />
)
