import React, { FC, useState } from 'react'

import Container from 'Components/Container'
import { dummyCompetitionList } from '__fixtures__/Competition'
import { CompetitionList } from 'Types/competition'
import SmallHeader from './SmallHeader'
import ListCompetitionSection from './ListCompetitionSection'
import SwiperPageNation from './SwiperPageNation'

export interface CompetitionProps {
  headerTitle: string
  buttonText: string
  competitionList: CompetitionList
}

const CompetitionSection: FC<CompetitionProps> = ({
  headerTitle,
  buttonText,
}) => {
  const [index, setIndex] = useState<number>(0)

  const onChangeHandler = (idx: number) => {
    setIndex(idx)
  }

  return (
    <Container>
      <SmallHeader
        headerTitle={headerTitle}
        buttonText={buttonText}
        index={index}
        onChangeHandler={onChangeHandler}
      />
      <ListCompetitionSection competitionList={dummyCompetitionList} />
      <SwiperPageNation index={index} onChangeHandler={onChangeHandler} />
    </Container>
  )
}

export default CompetitionSection
