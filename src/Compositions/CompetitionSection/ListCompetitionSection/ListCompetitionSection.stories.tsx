import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { dummyCompetitionList } from '__fixtures__/Competition'
import ListCompetitionSection, { CompetitionListProps } from '.'

export default {
  title: 'Compositions/CompetitionSection/ListCompetitionSection',
  component: ListCompetitionSection,
  argTypes: {
    competitionList: {
      description: '컴페티션 리스트',
      defaultValue: dummyCompetitionList,
      control: 'array',
    },
    index: {
      description: '인덱스',
      defaultValue: 0,
      control: 'number',
    },
  },
} as Meta

type StoryArgType = CompetitionListProps
export const ListCompetitionSectionComponent: Story<StoryArgType> = ({
  competitionList,
  index,
  onChangeHandler,
}) => (
  <ListCompetitionSection
    index={index}
    competitionList={competitionList}
    onChangeHandler={onChangeHandler}
  />
)
