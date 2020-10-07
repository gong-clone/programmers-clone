import React, { FC } from 'react'
import styled from 'Application/Theme'
import CompetitionSection from 'Compositions/CompetitionSection'
import JobListSection from 'Compositions/JobListSection'
import BannerSection from 'Compositions/BannerSection'
import OurPartnerSection from 'Compositions/OurPartnerSection'
import BannerSwiper from 'Compositions/BannerSwiper'
import FooterContainer from 'Compositions/Footer'
import { dummyCompetitionList as competitionList } from '__fixtures__/Competition'
import { dummyDeveloperBanner, dummyJoinUsBanner } from '__fixtures__/banner'
import { dummyJobList } from '__fixtures__/jobList'

const MainContainer = styled.main`
  min-height: calc(100vh - 3.125rem - 21.125rem - 5rem);
`

const ListCompetittionSection = styled.section`
  padding: 5rem 0 3.5rem 0;
  display: block;
`

const BannerSwiperSection = styled.section`
  margin: 5rem 0;
  display: block;
`

const Main: FC = () => (
  <MainContainer>
    <ListCompetittionSection>
      <CompetitionSection
        headerTitle="채용프로그램"
        buttonText="더보기"
        competitionList={competitionList}
      />
    </ListCompetittionSection>

    <JobListSection jobList={dummyJobList} />

    <BannerSection
      backgroundType="default"
      imgSrc={dummyDeveloperBanner.imgSrc}
      title={dummyDeveloperBanner.title}
      smallTitle={dummyDeveloperBanner.smallTitle}
      buttonText={dummyDeveloperBanner.buttonText}
    />

    <BannerSwiperSection>
      <BannerSwiper />
    </BannerSwiperSection>

    <OurPartnerSection />

    <BannerSection
      backgroundType="dark"
      title={dummyJoinUsBanner.title}
      smallTitle={dummyJoinUsBanner.smallTitle}
      buttonText={dummyJoinUsBanner.buttonText}
    />

    <FooterContainer />
  </MainContainer>
)

export default Main
