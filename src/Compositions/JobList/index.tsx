import React, { FC } from 'react'
import styled from '@emotion/styled'

import Container from 'Components/Container'
import SmallHeader from 'Compositions/SmallHeader'
import JobSortTagList from './JobSortTagList'
import JobItem from './JobItem'
import { Job, JobListType } from './Types/firebaseSchema'

const JobListContent = styled.div`
  @media (min-width: 992px) {
    & > * {
      width: calc(50% - 0.5rem);
      float: left;

      &:nth-child(2n) {
        margin-left: 1rem;
      }
    }
  }
`

const StyledJobSortTagList = styled(JobSortTagList)`
  padding: 0 0 2rem 0;
  margin: 0;
`

export interface JobListProps {
  jobList: JobListType
}

const JobList: FC<JobListProps> = ({ jobList }) => {
  const headerTitle = '채용 중인 포지션'
  const buttonText = '포지션 더보기'
  const tagList = jobList.map((job: Job) => job.positionTags)

  return (
    <Container>
      <SmallHeader headerTitle={headerTitle} buttonText={buttonText} />
      <StyledJobSortTagList tagList={tagList} />
      <JobListContent>
        {jobList.map((job: Job) => (
          <JobItem job={job} key={job.id} />
        ))}
      </JobListContent>
    </Container>
  )
}

export default JobList
