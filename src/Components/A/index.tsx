import styled from 'Application/Theme'

const A = styled.a`
  transition-duration: 0.8s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  color: ${(props) => props.theme.color.blue};
  text-decoration: none;
  cursor: pointer;
`

export default A
