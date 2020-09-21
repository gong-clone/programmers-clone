import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import JobSortTagList, { JobSortTagListProps } from '.'
import { dummyTagList } from '../__fixtures__/jobList'

export default {
  title: 'Compositions/JobSortTagList',
  component: JobSortTagList,
  argTypes: {
    tagList: {
      description: '태그 리스트',
      defaultValue: dummyTagList,
      control: 'array',
    },
  },
} as Meta

type StoryArgsType = JobSortTagListProps

export const JobSortTagListComponent: Story<StoryArgsType> = ({ tagList }) => (
  <JobSortTagList tagList={tagList} />
)
