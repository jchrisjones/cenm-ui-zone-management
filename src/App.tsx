import React, { useState } from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'

import { Layout } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import { Home, Users, Groups, Signin, UserDetails } from './pages'
import { SideNav } from './components'

const { Content, Header } = Layout

const App = (): JSX.Element => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen(() => !isMenuOpen)
  }

  return (
    <Layout className='main-layout'>
      {location.pathname !== '/auth/signin' &&
        location.pathname !== '/NotFound' && <SideNav collapsed={isMenuOpen} />}

      <Layout>
        {location.pathname !== '/auth/signin' &&
          location.pathname !== '/NotFound' && (
            <Header className='site-header'>
              <span className='burger-btn' onClick={toggleMenu}>
                <MenuOutlined />
              </span>
            </Header>
          )}

        <Content>
          <Switch>
            <Route path='/auth/signin' component={Signin} exact />
            <Route path='/groups' component={Groups} exact />
            <Route path='/users' component={Users} exact />
            <Route path='/users/:userId' component={UserDetails} exact />
            <Route path='/' component={Home} exact />
            <Redirect to='/NotFound' />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
