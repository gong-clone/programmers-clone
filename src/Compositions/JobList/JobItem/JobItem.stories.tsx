import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import JobItem, { JobItemProps } from '.'
import { dummyJobList } from '../__fixtures__/jobList'

export default {
  title: 'Compositions/JobItem',
  component: JobItem,
  argTypes: {
    job: {
      description: '잡 객체',
      defaultValue: dummyJobList[0],
      control: 'object',
    },
  },
} as Meta

type StoryArgType = JobItemProps

export const JobItemComposition: Story<StoryArgType> = ({ job }) => (
  <JobItem job={job} />
)
