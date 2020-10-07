import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { dummyJobList } from '__fixtures__/jobList'
import JobListSection, { JobListSectionProps } from '.'

export default {
  title: 'Compositions/JobListSection',
  component: JobListSection,
  argTypes: {
    JobListSection: {
      description: '잡 리스트',
      control: 'object',
    },
  },
} as Meta

type StoryArgsType = JobListSectionProps

export const JobListSectionComposition: Story<StoryArgsType> = ({
  jobList,
}) => <JobListSection jobList={jobList} />
JobListSectionComposition.args = {
  jobList: dummyJobList,
}
