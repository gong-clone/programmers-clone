import styled from 'Application/Theme'

const ItemWrap = styled.div`
  transition-duration: 0.1s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  width: 100%;
  border: 0.0625rem solid ${(props) => props.theme.color.lightGray};
  border-radius: 0.5rem;
  overflow: hidden;
`

export default ItemWrap
