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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  -webkit-user-drag: none;
  user-select: none; /* Non-prefixed version, currently*/
`

export const BannerSwiperSildeContainer = styled(SwiperSilde)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  -webkit-user-drag: none;
  user-select: none; /* Non-prefixed version, currently*/
`
export default SwiperSilde
