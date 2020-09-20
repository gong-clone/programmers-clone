import React, { FC } from 'react'
import styled from 'Application/Theme'

import { ImgCompetitionContainer } from 'Compositions/CompetitionSection/Image'
import SwiperContainer from 'Compositions/CompetitionSection/SwiperContainer'
import SwiperWrapperContainer from 'Compositions/CompetitionSection/SwiperWrapper'

import { Competition, CompetitionList } from 'Types/competition'
import { SwiperSildeContainer } from './SwiperSlide'
import ItemWrap from './SwiperSlide/ItemWrap'
import ItemThumb from './SwiperSlide/ItemWrap/ItemThumb'
import ItemInfo from './SwiperSlide/ItemWrap/ItemInfo'
import ItemBadgeState from './SwiperSlide/ItemWrap/ItemBadgeState'
import ItemBadgeLabel from './SwiperSlide/ItemWrap/ItemBadgeState/ItemBadgeLabel'

const StyledSwiperContainer = styled(SwiperContainer)`
  display: static;
  padding: 0.5rem 0 0 0.5rem;
`

const IngState = styled(ItemBadgeLabel)`
  border-bottom: 2.5rem solid ${(props) => props.theme.color.darkGray};
`

const EndState = styled(ItemBadgeLabel)`
  border-bottom: 2.5rem solid ${(props) => props.theme.color.whiteGray};
`

export interface CompetitionListProps {
  competitionList: CompetitionList
}

const ListCompetitionSection: FC<CompetitionListProps> = ({
  competitionList,
}) => {
  return (
    <StyledSwiperContainer>
      <SwiperWrapperContainer>
        {competitionList.map((competition: Competition) => {
          return (
            <SwiperSildeContainer key={competition.id}>
              <ItemWrap>
                <ItemBadgeState>
                  {competition.challengeState === '진행중' ? (
                    <IngState>{competition.challengeState}</IngState>
                  ) : (
                    <EndState>{competition.challengeState}</EndState>
                  )}
                </ItemBadgeState>
                <ItemThumb>
                  <ImgCompetitionContainer
                    imgPath={competition.thunbnailImage}
                  />
                </ItemThumb>
                <ItemInfo competition={competition} />
              </ItemWrap>
            </SwiperSildeContainer>
          )
        })}
      </SwiperWrapperContainer>
    </StyledSwiperContainer>
  )
}

export default ListCompetitionSection
