import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import LargeHeader, { LargeHeaderProps } from '.'

export default {
  title: 'Compositions/LargeHeader',
  component: LargeHeader,
  argTypes: {
    mainSentence: {
      description: '메인 센텐스',
      type: {
        required: true,
      },
      control: 'object',
    },
    description: {
      description: '메인 센텐스 밑 설명',
      control: 'text',
    },
  },
} as Meta

type StoryArgsType = LargeHeaderProps

export const OurFeatureLargeHeader: Story<StoryArgsType> = ({
  mainSentence,
  description,
}) => <LargeHeader mainSentence={mainSentence} description={description} />
OurFeatureLargeHeader.args = {
  mainSentence: (
    <>
      우리의 관심은, 당신의 <span>코드</span>
    </>
  ),
  description:
    '프로그래머스는 당신이 더 나은 코드를 쓸 수 있도록, 이렇게 도와드립니다.',
}

export const OurPartnerLargeHeader: Story<StoryArgsType> = ({
  mainSentence,
}) => <LargeHeader mainSentence={mainSentence} />
OurPartnerLargeHeader.args = {
  mainSentence: (
    <>
      국내 <span>700개</span> 이상의 기업이
      <br />
      프로그래머스를 통해 당신을 기다립니다.
    </>
  ),
}
