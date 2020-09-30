import React, { FC } from 'react'
import styled from 'Application/Theme'
import CompetitionSection from 'Compositions/CompetitionSection'
import { dummyCompetitionList as competitionList } from '__fixtures__/Competition'
import BannerSwiper from 'Compositions/BannerSwiper'
import FooterContainer from 'Compositions/Footer'

const MainContainer = styled.main`
  min-height: calc(100vh - 3.125rem - 21.125rem - 5rem);
`

const ListCompetittionSection = styled.section`
  padding: 5rem 0 7rem 0;
  display: block;
`

const BannerSwiperSection = styled.section`
  margin: 5rem 0 0 0;
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
    <BannerSwiperSection>
      <BannerSwiper />
    </BannerSwiperSection>
    <FooterContainer />
  </MainContainer>
)
export default Main
