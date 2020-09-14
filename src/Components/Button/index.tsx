import styled from 'Application/Theme'

export interface StyledProps {
  size?: 'md'
}

const Button = styled.button<StyledProps>`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 16px;
  letter-spacing: -0.009em;
  font-weight: 500;
  color: ${(props) => props.theme.color.blue};
  line-height: 1.5;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: '0.4375rem 0.8125rem';
  cursor: pointer;
  transition: color 0.08s ease-in-out, background-color 0.08s ease-in-out,
    border-color 0.08s ease-in-out, box-shadow 0.08s ease-in-out;

  ${(props) => {
    if (props.size === 'md') {
      return `
        font-size: 14px;
        padding: '0.3125rem 0.8125rem';
      `
    }
    return ``
  }};
`

const PrimaryButton = styled(Button)`
  color: white;
  background-color: ${(props) => props.theme.color.blue};
  border-color: ${(props) => props.theme.color.blue};

  &:hover {
    background-color: ${(props) => props.theme.color.darkBlue};
    border-color: ${(props) => props.theme.color.darkBlue};
  }
`

const LightPrimaryButton = styled(Button)`
  color: ${(props) => props.theme.color.darkBlue};
  background-color: ${(props) => props.theme.color.cyan};
  border-color: ${(props) => props.theme.color.cyan};

  &:hover {
    background-color: ${(props) => props.theme.color.lightNavy};
    border-color: ${(props) => props.theme.color.lightNavy};
  }
`

const OutlinePrimaryButton = styled(Button)`
  border-color: ${(props) => props.theme.color.blue};

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.color.blue};
  }
`
export { PrimaryButton, OutlinePrimaryButton, LightPrimaryButton }
export default Button
