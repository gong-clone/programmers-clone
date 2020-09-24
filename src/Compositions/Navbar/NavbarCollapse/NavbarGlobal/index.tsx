import React, { FC } from 'react'
import styled from 'Application/Theme'

import NavItem, { NavItemProps, Divider } from '../NavItem'

const NavbarGlobalUl = styled.ul`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin-top: 0;
  /* .nav */
  flex-wrap: wrap;
  /* .navbar-nav */
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  /* .navbar-expand-lg .navbar-nav */
  flex-direction: row;
  /* .navbar-application .navbar-global */
  transform: translateX(calc(-50% + 40rem));
  left: calc(50% - 40rem);
  position: absolute;
`

// 아이템 하드코딩
const jobItems: Array<NavItemProps> = [
  {
    id: 'nav-job-item1',
    link: '/skill_checks',
    desc: '스킬체크',
  },
  {
    id: 'nav-job-item2',
    link: '/job',
    desc: '개발자 채용',
  },
]

const learnItems: Array<NavItemProps> = [
  {
    id: 'nav-learn-item1',
    link: '/learn/challenges',
    desc: '코딩테스트 연습',
  },
  {
    id: 'nav-learn-item2',
    link: '/learn',
    desc: '프로그래밍 강의',
  },
]

const NavbarGlobal: FC = () => {
  const jobItemList = jobItems.map((item) => {
    return <NavItem key={item.id} link={item.link} desc={item.desc} />
  })

  const learnItemList = learnItems.map((item) => {
    return <NavItem key={item.id} link={item.link} desc={item.desc} />
  })

  return (
    <NavbarGlobalUl>
      {jobItemList}
      <Divider />
      {learnItemList}
    </NavbarGlobalUl>
  )
}

export { jobItems, learnItems }
export default NavbarGlobal
