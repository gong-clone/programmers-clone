import React, { FC } from 'react'
import CompetitionSection from 'Compositions/CompetitionSection'
import { dummyCompetitionList } from '__fixtures__/Competition'

const Main: FC = () => (
  <CompetitionSection
    headerTitle="채용프로그램"
    buttonText="더보기"
    competitionList={dummyCompetitionList}
  />
)
export default Main
