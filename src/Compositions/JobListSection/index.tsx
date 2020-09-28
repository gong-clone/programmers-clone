import React, { FC } from 'react'
import styled from '@emotion/styled'

import Container from 'Components/Container'
import SmallHeader from 'Compositions/SmallHeader'
import { Job, JobListType } from 'Types/jobList'
import JobSortTagList from './JobSortTagList'
import JobItem from './JobItem'

const StyledJobListSection = styled.section`
  position: relative;
  margin-top: 0;
  padding: 5rem 0 4rem 0;
`

const JobListContent = styled.div`
  overflow: hidden;

  @media (min-width: 992px) {
    & > * {
      width: calc(50% - 0.5rem);
      float: left;

      &:nth-child(2n) {
        margin-left: 1rem;
      }
    }
  }

  @media (min-width: 576px) {
    & > * {
      min-height: 7.375rem;
    }
  }
`

const StyledJobSortTagList = styled(JobSortTagList)`
  padding: 0 0 2rem 0;
  margin: 0;
`

export interface JobListSectionProps {
  jobList: JobListType
}

const JobListSection: FC<JobListSectionProps> = ({ jobList }) => {
  const headerTitle = '채용 중인 포지션'
  const buttonText = '포지션 더보기'
  const tagList = jobList ? jobList.map((job: Job) => job.positionTags) : []

  return (
    <StyledJobListSection>
      <Container>
        <SmallHeader headerTitle={headerTitle} buttonText={buttonText} />
        <StyledJobSortTagList tagList={tagList} />
        <JobListContent>
          {jobList &&
            jobList
              .slice(0, 8)
              .map((job: Job) => <JobItem job={job} key={job.id} />)}
        </JobListContent>
      </Container>
    </StyledJobListSection>
  )
}

export default JobListSection
