import React, { FC } from 'react'
import styled from 'Application/Theme'
import LargeHeader from 'Compositions/LargeHeader'
import listCompany from '__fixtures__/listCompany'
import ListCompany from './ListCompany'

const StyledOurPartnerSection = styled.section`
  margin-bottom: 7.5rem;
`

const OurPartnerSection: FC = () => (
  <StyledOurPartnerSection>
    <LargeHeader
      mainSentence={
        <>
          국내 <span>700개</span> 이상의 기업이
          <br />
          프로그래머스를 통해 당신을 기다립니다.
        </>
      }
    />
    <ListCompany logoList={listCompany} />
  </StyledOurPartnerSection>
)

export default OurPartnerSection
