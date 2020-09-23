import styled from '@emotion/styled'

const NextButton = styled.div`
  position: absolute;
  top: 50%;
  left: auto;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: none;
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  margin-top: -1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 3.5rem;
  right: 1rem;
  opacity: 0;
  font-size: 1.2rem;
  background-color: #0c151c;
  color: white;
`

export default NextButton
