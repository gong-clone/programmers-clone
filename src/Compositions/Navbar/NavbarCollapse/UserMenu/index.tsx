import React, { FC } from 'react'
import styled from 'Application/Theme'

import NavItem, { NavItemProps } from '../NavItem'

const UserMenuUl = styled.ul`
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
  /* .ml-auto */
  margin-left: auto !important;
  /* .navbar-expand-lg .navbar-nav */
  flex-direction: row;
`

// 아이템 하드코딩
const userItems: Array<NavItemProps> = [
  {
    id: 'user-menu-item1',
    link: '/user/signup',
    desc: '계정 만들기',
  },
  {
    id: 'user-menu-item2',
    link: '/user/login',
    desc: '로그인',
  },
  {
    id: 'user-menu-item3',
    link: 'https://business.programmers.co.kr/',
    desc: '기업회원',
  },
]

const UserMenu: FC = () => {
  const userItemList = userItems.map((item) => {
    return <NavItem key={item.id} link={item.link} desc={item.desc} />
  })
  return <UserMenuUl>{userItemList}</UserMenuUl>
}

export default UserMenu
