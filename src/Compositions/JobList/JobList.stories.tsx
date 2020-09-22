import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import JobList, { JobListProps } from '.'
import { dummyJobList } from './__fixtures__/jobList'

export default {
  title: 'Compositions/JobList',
  component: JobList,
  argTypes: {
    jobList: {
      description: '잡 리스트',
      defaultValue: dummyJobList,
      control: 'object',
    },
  },
} as Meta

type StoryArgsType = JobListProps

export const JobListComposition: Story<StoryArgsType> = ({ jobList }) => (
  <JobList jobList={jobList} />
)
