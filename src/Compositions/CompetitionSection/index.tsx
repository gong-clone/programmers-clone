import React, { FC } from 'react'

import Container from 'Components/Container'
import { dummyCompetitionList } from '__fixtures__/Competition'
import { CompetitionList } from 'Types/competition'
import SmallHeader from './SmallHeader'
import ListCompetitionSection from './ListCompetitionSection'

export interface CompetitionProps {
  headerTitle: string
  buttonText: string
  competitionList: CompetitionList
}

const JobList: FC<CompetitionProps> = ({ headerTitle, buttonText }) => {
  return (
    <Container>
      <SmallHeader headerTitle={headerTitle} buttonText={buttonText} />
      <ListCompetitionSection competitionList={dummyCompetitionList} />
    </Container>
  )
}

export default JobList
