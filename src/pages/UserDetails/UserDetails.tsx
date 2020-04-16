import React, { Fragment, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { Row, Col, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import { UserDetailsCard, UserGroups } from '../../components'
import { TUser } from '../../typings/User'
import usrers from '../../mocks/users.json'

const UserDetails = () => {
  const [user, setUser] = useState<TUser | undefined>()
  const { userId } = useParams()

  const mockGroups = [
    'group1',
    'group2',
    'group3',
    'group4',
    'group5',
    'engineering',
    'all',
  ]

  const handleGroupsChange = (groups: string[]) => {
    if (user) {
      setUser(() => {
        return {
          ...user,
          groups: groups,
        }
      })
    }
  }

  useEffect(() => {
    const foundUser = usrers.find(user => user.id === userId)
    setUser(foundUser)
  }, [userId])

  return (
    <Fragment>
      <Row style={{ width: '92%', margin: '0 auto', marginBottom: '20px' }}>
        <Col span={24}>
          <div className='top-bar-container'>
            <Link to='/users'>
              <Button type='link'>
                <ArrowLeftOutlined />
                Back to users
              </Button>
            </Link>
            <h2 style={{ padding: '0 16px', textAlign: 'center' }}>
              User Details
            </h2>
            <div />
          </div>
        </Col>
      </Row>

      <Row style={{ width: '92%', margin: '0 auto' }}>
        <Col span={7}>{user && <UserDetailsCard user={user} />}</Col>
        <Col span={16} offset={1} className='gutter-row'>
          {user && (
            <UserGroups
              user={user}
              groups={mockGroups}
              groupsChange={handleGroupsChange}
            />
          )}
        </Col>
      </Row>
    </Fragment>
  )
}

export default UserDetails
