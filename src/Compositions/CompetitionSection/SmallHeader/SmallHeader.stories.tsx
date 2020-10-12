import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import SmallHeader, { SmallHeaderProps } from '.'

export default {
  title: 'Compositions/CompetitionSection/SmallHeader',
  component: SmallHeader,
  argTypes: {
    headerTitle: {
      description: '스몰 헤더 타이틀',
      type: {
        required: true,
      },
      defaultValue: '스몰 헤더',
      control: 'text',
    },
    buttonText: {
      description: '버튼 텍스트',
      type: {
        required: true,
      },
      defaultValue: '더보기',
      control: 'text',
    },
    index: {
      description: '인덱스 번호',
      type: {
        required: true,
      },
      defaultValue: 0,
      control: 'number',
    },
  },
} as Meta

type StoryArgsType = SmallHeaderProps

export const SmallHeaderComponent: Story<StoryArgsType> = ({
  headerTitle,
  buttonText,
  index,
  onChangeHandler,
}) => (
  <SmallHeader
    headerTitle={headerTitle}
    buttonText={buttonText}
    index={index}
    onChangeHandler={onChangeHandler}
  />
)
