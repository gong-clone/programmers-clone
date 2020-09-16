import styled from 'Application/Theme'

export interface StyledProps {
  color?: '5F7F90'
}

const Li = styled.li<StyledProps>`
  padding-top: 0.25rem;
  font-size: inherit;
  color: ${(props) => props.color || '5F7F90'};
`
export default Li
