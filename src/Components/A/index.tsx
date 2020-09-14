import styled, { theme } from 'Application/Theme'

const { color } = theme

const A = styled.a`
  transition-duration: 0.8s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  color: ${color.blue};
  text-decoration: none;
  cursor: pointer;
`

const NavbarBrand = styled(A)`
  background: ${color.white};
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: ${color.white};
`

const NavLink = styled(A)`
  display: block;
  padding: 0.25rem 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: #b2c0cc;
  font-weight: 500;
`
const ItemThumb = styled(A)`
  position: relative;
  overflow: hidden;
  display: block;
  height: 14.375rem;
  border-radius: 0.5rem 0.5rem 0 0;
`

const ItemTitle = styled(A)`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #263747;
  height: 3.2em;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`

export { NavbarBrand, NavLink, ItemThumb, ItemTitle }
export default A
