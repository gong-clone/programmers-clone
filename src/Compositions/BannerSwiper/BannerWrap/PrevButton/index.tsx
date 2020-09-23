import styled from '@emotion/styled'

const PrevButton = styled.div`
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: 50%;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 1rem;
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  margin-top: -1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3.5rem;
  background-color: #0c151c;
  background-image: none;
  font-size: 1.2rem;
  opacity: 0;
  color: white;
`

export default PrevButton
