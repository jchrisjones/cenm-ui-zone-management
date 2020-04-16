import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Tag, Card } from 'antd'
import { ColumnProps } from 'antd/es/table'

import usersData from '../../mocks/users.json'
import { TUser } from '../../typings/User'

function Users(): JSX.Element {
  const columns: ColumnProps<TUser>[] = [
    {
      title: 'UserID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => {
        return a.name.localeCompare(b.name)
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => {
        return a.name.localeCompare(b.name)
      },
      // eslint-disable-next-line react/display-name
      render: (text, user) => <Link to={`/users/${user.id}`}>{text}</Link>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => {
        return a.name.localeCompare(b.name)
      },
    },
    {
      title: 'Provider',
      dataIndex: 'provider',
      key: 'provider',
      // eslint-disable-next-line react/display-name
      render: text =>
        text ? <span>{text}</span> : <span className='grey-text'>N/A</span>,
    },
    {
      title: 'Groups',
      dataIndex: 'groups',
      key: 'groups',
      width: 250,
      // eslint-disable-next-line react/display-name
      render: (groups: string[]) => (
        <span>
          {groups.map((group, index) => (
            <Tag
              color='blue'
              style={{ margin: '3px' }}
              key={`${index}-${group}`}
            >
              {group}
            </Tag>
          ))}
        </span>
      ),
    },
    {
      title: 'Enabled',
      dataIndex: 'enabled',
      key: 'enabled',
      // eslint-disable-next-line react/display-name
      render: (enabled: boolean) => (
        <span>
          <Tag color={enabled ? 'green' : 'red'}>{enabled ? 'Yes' : 'No'}</Tag>
        </span>
      ),
    },
  ]

  return (
    <Card className='users-table-container'>
      <Table<TUser>
        rowKey='id'
        dataSource={usersData}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
    </Card>
  )
}

export default Users
