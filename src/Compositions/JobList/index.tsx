import React, { FC } from 'react'

import Container from 'Components/Container'
import SmallHeader from 'Compositions/SmallHeader'

const JobList: FC = () => {
  // 아직 문자열을 저장하는 곳을 정하지 않았기 때문에 하드코딩함
  const headerTitle = '채용 중인 포지션'
  const buttonText = '포지션 더보기'

  return (
    <Container>
      <SmallHeader headerTitle={headerTitle} buttonText={buttonText} />
    </Container>
  )
}

export default JobList
