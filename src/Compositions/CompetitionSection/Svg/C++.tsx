import * as React from 'react'
import styled from 'Application/Theme'

const SvgCplusplusIcon = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 31 30" className={className}>
    <path
      d="M12.5 13H15v4h-2.5a1.5 1.5 0 0 1-3-.002v-3.996a1.5 1.5 0 0 1 3-.002zm6.5 1v-2h-2v2h-2v2h2v2h2v-2h2v2h2v-2h2v-2h-2v-2h-2v2h-2zm7.903-5.421l.067-.042c-.134-.231-.334-.442-.534-.547l-10.74-5.843C15.52 2.042 15.274 2 15.007 2c-.267 0-.511.063-.69.147L3.646 8.011C3.267 8.221 3 8.747 3 9.146v11.708c0 .23.044.483.2.714l-.044.021c.11.168.266.316.422.4l10.718 5.864c.177.105.422.147.689.147.267 0 .511-.063.69-.147l10.672-5.864c.378-.21.645-.736.645-1.135V9.125a.978.978 0 0 0-.089-.546zM7 12.996a4 4 0 0 1 8 0v4.008a4 4 0 0 1-8 0v-4.008z"
      fillRule="evenodd"
    />
  </svg>
)

const Cplusplus = styled(SvgCplusplusIcon)`
  display: inline-block;
  fill: ${(props) => props.theme.color.lightGray};
  width: 1.875rem;
  height: 1.875rem;
`

const MemoSvgCplusplusIcon = React.memo(Cplusplus)
export default MemoSvgCplusplusIcon
