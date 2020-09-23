import styled from 'Application/Theme'

const SwiperSilde = styled.div`
  flex-shrink: 0;
  margin-right: 32px;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
`

export const SwiperSildeContainer = styled(SwiperSilde)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const BannerSwiperSildeContainer = styled(SwiperSilde)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export default SwiperSilde
