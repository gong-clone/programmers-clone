import * as React from 'react'
import styled from 'Application/Theme'

const SvgHelpIcon = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M11.5 2C6.81 2 3 5.81 3 10.5c0 4.69 3.81 8.5 8.5 8.5h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zM13 16h-2v-2h2v2zm0-3.421h-2c0-2.545 2-2.859 2-4.004C13 7.799 12.493 7 11.5 7S10 7.75 10 8.575H8C8 6.533 9.302 5 11.5 5S15 6.606 15 8.575c0 2.028-2 2.115-2 4.004z" />
  </svg>
)

const Help = styled(SvgHelpIcon)`
  fill: ${(props) => props.theme.color.primary};
  width: 1.5rem;
  height: 1.5rem;
`

const MemoSvgHelpIcon = React.memo(Help)
export default MemoSvgHelpIcon
