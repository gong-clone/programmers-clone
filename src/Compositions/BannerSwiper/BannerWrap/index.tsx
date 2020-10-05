import styled from 'Application/Theme'

const BannerWrap = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  text-align: left;
  border-radius: 0.75rem;
  background: #263747;
  padding: 0 4rem;

  &:hover {
    /* 이전버튼, 다음버튼을 뛰울때 사용 */
    & > * {
      opacity: 1;
    }
  }
`
export default BannerWrap
