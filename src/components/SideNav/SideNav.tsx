import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import { Layout, Menu } from 'antd'
import {
  TeamOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

type NavProps = {
  collapsed?: boolean
}

type Props = RouteComponentProps & NavProps

const SideNav = ({ collapsed = false, location }: Props) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
      }}
    >
      <div className={collapsed ? 'logo-collapsed' : 'logo'} />
      <Menu
        mode='inline'
        theme='light'
        activeKey={location.pathname}
        selectedKeys={[location.pathname]}
        style={{
          backgroundColor: '#fff',
          color: '#001529',
          lineHeight: '64px',
        }}
      >
        <Menu.Item key='/users' title='Users'>
          <NavLink to='/users'>
            <TeamOutlined />
            {!collapsed && <span>Users</span>}
          </NavLink>
        </Menu.Item>
        <Menu.Item key='/groups' title='Groups'>
          <NavLink to='/groups'>
            <AppstoreOutlined />
            {!collapsed && <span>Groups</span>}
          </NavLink>
        </Menu.Item>
        <Menu.Item key='/groups/new' title='Create Group'>
          <NavLink to='/groups/new'>
            <AppstoreAddOutlined />
            {!collapsed && <span>Create Group</span>}
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default withRouter(SideNav)
