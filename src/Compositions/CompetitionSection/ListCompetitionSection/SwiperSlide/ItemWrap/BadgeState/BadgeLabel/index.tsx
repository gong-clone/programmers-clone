import styled from 'Application/Theme'

const BadgeLabel = styled.div`
  display: block;
  position: absolute;
  top: 0.5rem;
  left: -2.5rem;
  width: 8.5rem;
  height: 0;
  border-left: 2.5rem solid transparent;
  border-right: 2.5rem solid transparent;
  transform: rotate(-45deg);
  z-index: 1;
  color: white;
  text-align: center;
  line-height: 2.5rem;
`
export default BadgeLabel
