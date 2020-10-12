import React, { FC } from 'react'
import styled from 'Application/Theme'
import A from 'Components/A'
import HStyle from 'Components/H'
import Ul from 'Components/Ul'
import Li from 'Components/Li'
import { Job } from 'Types/jobList'

const JobItemContainer = styled.div`
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 0.0625rem solid ${(props) => props.theme.color.lightGray};
  border-radius: 0.25rem;
  height: auto;

  &:hover {
    border-color: ${(props) => props.theme.color.sky};

    & h5 {
      color: ${(props) => props.theme.color.blue};
      text-decoration: underline;
    }
  }
`

const JobItemLink = styled(A)``

const CompanyWrapContainer = styled.div`
  width: 100%;
  display: flex;
`

const CompanyImage = styled.img`
  text-align: center;
  width: 5rem;
  height: 5rem;
  max-width: 5rem;
  max-height: 5rem;
  line-height: 5rem;
  margin: 0 auto 0;
  vertical-align: middle;
  border-radius: 0.25rem;
`

const JobItemDescription = styled.div`
  display: inline-block;
  width: calc(100% - 5rem);
  padding-left: 1.5rem;
`

const JobItemTitle = styled.h5`
  ${HStyle}

  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  display: block;
  overflow: hidden;
  padding-bottom: 0.375rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary};
  font-size: 16px;
  line-height: 1.6;
`

const JobItemCompanyName = styled.h6`
  ${HStyle}

  line-height: 1;
  color: ${(props) => props.theme.color.gray};
  font-size: 14px;
  font-weight: 400;
`

const PositionTagList = styled(Ul)`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 1.5rem;
  margin: -1.25rem 0 0 0;
  padding: 0 0 0 6.5rem;
  overflow: hidden;
  list-style: none;
  font-size: 0;
`

const PositionTagItem = styled(Li)`
  font-size: 12px;
  line-height: 1.5;
  display: inline-block;
  margin: 0 0.25rem 0.25rem 0;
  padding: 0.1875rem 0.5rem;
  vertical-align: top;
  border-radius: 0.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.lightDark};
  background-color: ${(props) => props.theme.color.moreLightGray};
`

export interface JobItemProps {
  job: Job
}

const JobItem: FC<JobItemProps> = ({ job }) => (
  <JobItemContainer>
    <JobItemLink>
      <CompanyWrapContainer>
        <CompanyImage src={job.companyImg} alt={job.name} />
        <JobItemDescription>
          <JobItemTitle>{job.title}</JobItemTitle>
          <JobItemCompanyName>{job.name}</JobItemCompanyName>
        </JobItemDescription>
      </CompanyWrapContainer>
      <PositionTagList>
        {job.positionTags.map((positionTag: string) => (
          <PositionTagItem key={positionTag}>{positionTag}</PositionTagItem>
        ))}
      </PositionTagList>
    </JobItemLink>
  </JobItemContainer>
)

export default JobItem
