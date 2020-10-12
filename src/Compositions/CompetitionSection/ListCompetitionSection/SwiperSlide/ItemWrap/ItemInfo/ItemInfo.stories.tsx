import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { dummyCompetitionList } from '__fixtures__/Competition'
import ItemInfo, { CompetitionProps } from '.'

export default {
  title:
    'Compositions/CompetitionSection/ListCompetitionSection/SwiperSilde/ItemWrap/ItemInfo',
  component: ItemInfo,
  argTypes: {
    competition: {
      description: '컴페티션 오브젝트',
      defaultValue: dummyCompetitionList[0],
      control: 'object',
    },
  },
} as Meta

type StoryArgType = CompetitionProps
export const ItemInfoComponent: Story<StoryArgType> = ({ competition }) => (
  <ItemInfo competition={competition} />
)
