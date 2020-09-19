import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import CompetitionSection, { CompetitionProps } from '.'

export default {
  title: 'Compositions/CompetitionSection',
  component: CompetitionSection,
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
  },
} as Meta

type StoryArgsType = CompetitionProps

export const CompetitionSectionComposition: Story<StoryArgsType> = ({
  headerTitle,
  buttonText,
  competitionList,
}) => (
  <CompetitionSection
    headerTitle={headerTitle}
    buttonText={buttonText}
    competitionList={competitionList}
  />
)
