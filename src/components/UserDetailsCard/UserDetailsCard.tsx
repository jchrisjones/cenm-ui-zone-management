import React, { Fragment } from 'react'

import { Card, Avatar, Divider, Tag, Descriptions, Switch } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { TUser } from '../../typings/User'
import './UserDetailsCard.scss'

type Props = {
  user: TUser
}

const UserDetailsCard = ({ user }: Props) => {
  const handleLockChange = () => {
    user.locked = !user.locked
  }

  const handleEnabledChange = () => {
    user.enabled = !user.enabled
  }

  return (
    <Card className='user-details-card'>
      <div className='user-details-card__header'>
        <span className='user-details-card__info'>INFO</span>
      </div>

      <div className='avatar-container'>
        <Avatar
          style={{ backgroundColor: '#1890ff' }}
          size={140}
          icon={<UserOutlined />}
        />
      </div>

      {user && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '0' }}>{user.name}</h2>
          <p className='grey-text'>{user.email}</p>
        </div>
      )}

      <Divider dashed />

      {user && (
        <Fragment>
          <Descriptions
            title='USER DETAILS:'
            column={1}
            style={{ textAlign: 'left', padding: '0 10px' }}
          >
            <Descriptions.Item label='UserID'>{user.id}</Descriptions.Item>
            <Descriptions.Item label='Provider'>
              {user.provider ? user.provider : 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label='Groups'>
              {user.groups.length > 0 ? (
                user.groups.map(group => (
                  <Tag key={group} color='blue' style={{ margin: '3px' }}>
                    {group}
                  </Tag>
                ))
              ) : (
                <span className='grey-text'>
                  {user.name} has not groups yet.
                </span>
              )}
            </Descriptions.Item>
            <Descriptions.Item label='Locked'>
              <Switch
                defaultChecked={user.locked}
                onChange={handleLockChange}
              />
            </Descriptions.Item>
            <Descriptions.Item label='Enabled'>
              <Switch
                defaultChecked={user.enabled}
                onChange={handleEnabledChange}
              />
            </Descriptions.Item>
          </Descriptions>
        </Fragment>
      )}
    </Card>
  )
}

export default UserDetailsCard
