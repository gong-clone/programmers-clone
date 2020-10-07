import React, { FC, HTMLProps } from 'react'
import styled from '@emotion/styled'
import Ul from 'Components/Ul'
import Li from 'Components/Li'
import { LightPrimaryButton } from 'Components/Button'
import { TagList } from 'Types/jobList'

const StyledJobSortTagList = styled(Ul)`
  & > * {
    margin: 0 0.5rem 0.5rem 0;
    display: inline-block;
    vertical-align: top;
  }
`

const JobSortTag = styled(Li)`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
`

export interface JobSortTagListProps extends HTMLProps<HTMLUListElement> {
  tagList: TagList[]
}

const JobSortTagList: FC<JobSortTagListProps> = ({ tagList, className }) => {
  const flattenTagList = tagList.flat()
  const uniqueTagList = flattenTagList.filter((item, pos) => {
    return flattenTagList.indexOf(item) === pos
  })
  return (
    <StyledJobSortTagList className={className}>
      {uniqueTagList.map((tag) => (
        <JobSortTag>
          <LightPrimaryButton size="md">{tag}</LightPrimaryButton>
        </JobSortTag>
      ))}
    </StyledJobSortTagList>
  )
}

export default JobSortTagList
