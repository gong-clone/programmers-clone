import * as React from 'react'
import styled from 'Application/Theme'

const SvgKotilnIcon = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 31 30" className={className}>
    <path
      d="M5 5v20h19.999l-9.972-10.044L24.999 5H5zm2 10l7-8h6L7 21v-6z"
      fillRule="evenodd"
    />
  </svg>
)

const Kotiln = styled(SvgKotilnIcon)`
  display: inline-block;
  fill: ${(props) => props.theme.color.lightGray};
  width: 1.875rem;
  height: 1.875rem;
`

const MemoSvgKotilnIcon = React.memo(Kotiln)
export default MemoSvgKotilnIcon
