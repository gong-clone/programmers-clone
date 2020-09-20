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
      control: 'object',
    },
  },
} as Meta

type StoryArgType = CompetitionListProps
export const ListCompetitionSectionComponent: Story<StoryArgType> = ({
  competitionList,
}) => <ListCompetitionSection competitionList={competitionList} />
