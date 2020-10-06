import React, { FC } from 'react'
import styled from 'Application/Theme'

import CompetitionSection from 'Compositions/CompetitionSection'
import JobListSection from 'Compositions/JobListSection'
import BannerSection from 'Compositions/BannerSection'
import OurPartnerSection from 'Compositions/OurPartnerSection'

import { dummyCompetitionList } from '__fixtures__/Competition'
import { dummyJobList } from '__fixtures__/jobList'
import { dummyDeveloperBanner, dummyJoinUsBanner } from '__fixtures__/banner'

const MainContainer = styled.main`
  min-height: calc(100vh - 3.125rem - 21.125rem - 5rem);
`

const Main: FC = () => (
  <MainContainer>
    <CompetitionSection
      headerTitle="채용프로그램"
      buttonText="더보기"
      competitionList={dummyCompetitionList}
    />
    <JobListSection jobList={dummyJobList} />
    <BannerSection
      backgroundType="default"
      imgSrc={dummyDeveloperBanner.imgSrc}
      title={dummyDeveloperBanner.title}
      smallTitle={dummyDeveloperBanner.smallTitle}
      buttonText={dummyDeveloperBanner.buttonText}
    />
    <OurPartnerSection />
    <BannerSection
      backgroundType="dark"
      title={dummyJoinUsBanner.title}
      smallTitle={dummyJoinUsBanner.smallTitle}
      buttonText={dummyJoinUsBanner.buttonText}
    />
  </MainContainer>
)
export default Main
