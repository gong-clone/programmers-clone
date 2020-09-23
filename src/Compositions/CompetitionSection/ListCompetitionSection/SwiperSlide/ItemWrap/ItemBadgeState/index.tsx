import styled from 'Application/Theme'

const ItemBadgeState = styled.div`
  display: block;
  &::before {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    content: '';
    transform: rotate(45deg);
    top: -0.25rem;
    left: 5.375rem;
    border-top: 0.5625rem solid ${(props) => props.theme.color.veryLightGray};
    border-right: 0.5625rem solid transparent;
  }

  &::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    content: '';
    transform: rotate(45deg);
    top: 5.375rem;
    left: -0.25rem;
    border-bottom: 0.5625rem solid ${(props) => props.theme.color.veryLightGray};
    border-right: 0.5625rem solid transparent;
  }
`
export default ItemBadgeState
