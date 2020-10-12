import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import SwiperPageNation, { SwiperPageNationProps } from '.'

export default {
  title: 'Compositions/CompetitionSection/SwiperPageNation',
  component: SwiperPageNation,
  argTypes: {
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

type StoryArgsType = SwiperPageNationProps
export const SwiperPageNationComponent: Story<StoryArgsType> = ({
  index,
  onChangeHandler,
}) => <SwiperPageNation index={index} onChangeHandler={onChangeHandler} />
