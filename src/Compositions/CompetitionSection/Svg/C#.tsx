import * as React from 'react'
import styled from 'Application/Theme'

const SvgCsharpIcon = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 31 30" className={className}>
    <path
      d="M26.903 8.579l.067-.042c-.134-.231-.334-.442-.534-.547l-10.74-5.843C15.52 2.042 15.274 2 15.007 2c-.267 0-.511.063-.69.147L3.646 8.011C3.267 8.221 3 8.747 3 9.146v11.708c0 .23.044.483.2.714l-.044.021c.11.168.266.316.422.4l10.718 5.864c.177.105.422.147.689.147.267 0 .511-.063.69-.147l10.672-5.864c.378-.21.645-.736.645-1.135V9.125a.978.978 0 0 0-.089-.546zm-2.315 5.809l.362-1.942h-1.387l.45-2.317h-2.057l-.451 2.317h-1.1l.45-2.317h-2.043l-.458 2.317h-1.34l-.37 1.942h1.327l-.24 1.21h-1.346l-.37 1.962h1.34L16.877 20h2.044l.485-2.44h1.1L20.022 20h2.058l.479-2.44h1.394l.362-1.962H22.94l.233-1.21h1.415zm-4.703-.226h1.476l-.348 1.668H19.55l.335-1.668zM7 12.996a4 4 0 0 1 8 0v4.008a4 4 0 0 1-8 0v-4.008zm5.5.004H15v4h-2.5a1.5 1.5 0 0 1-3-.002v-3.996a1.5 1.5 0 0 1 3-.002z"
      fillRule="evenodd"
    />
  </svg>
)

const Csharp = styled(SvgCsharpIcon)`
  display: inline-block;
  fill: ${(props) => props.theme.color.lightGray};
  width: 1.875rem;
  height: 1.875rem;
`

const MemoSvgCsharpIcon = React.memo(Csharp)
export default MemoSvgCsharpIcon
