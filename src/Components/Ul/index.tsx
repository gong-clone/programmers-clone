import styled from 'Application/Theme'

export interface StyledProps {
  listStyle?: 'none'
}

const Ul = styled.ul<StyledProps>`
  list-style: ${(props) => props.listStyle || 'none'};
  font-size: 0.875rem;
`

export default Ul
