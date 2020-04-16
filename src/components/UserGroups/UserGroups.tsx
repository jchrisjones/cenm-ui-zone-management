import React, { useState, useCallback, useEffect } from 'react'
import { Card, Transfer } from 'antd'

import { TUser } from '../../typings/User'

interface Group {
  key: string
  title: string
  chosen: boolean
}

interface Props {
  groups: string[]
  user: TUser
  groupsChange: (groups: string[]) => void
}

const UserGroups = ({ groups, user, groupsChange }: Props) => {
  const [mockData, setMockData] = useState<Array<Group>>([])
  const [targetKeys, setTargetKeys] = useState<Array<string>>([])

  const getMock = useCallback(() => {
    const keys = []
    const data = []
    for (let i = 0; i < groups.length; i++) {
      const item = {
        key: groups[i],
        title: groups[i],
        chosen: !!user?.groups.includes(groups[i]),
      }
      if (item.chosen) {
        keys.push(item.key)
      }
      data.push(item)
    }

    setMockData(data)
    setTargetKeys(keys)
  }, [groups, user])

  const filterOption = (inputValue: string, option: Group) =>
    option.title.indexOf(inputValue) > -1

  const handleChange = (targetKeys: string[]) => {
    setTargetKeys(targetKeys)
    groupsChange(targetKeys)
  }

  const handleSearch = (dir: string, value: string) => {
    console.log('search:', dir, value)
  }

  useEffect(() => {
    getMock()
  }, [getMock])

  return (
    <Card style={{ borderRadius: '8px' }}>
      <h3 style={{ textAlign: 'center' }}>Edit Groups</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <Transfer
          dataSource={mockData}
          showSearch
          filterOption={filterOption}
          targetKeys={targetKeys}
          onChange={handleChange}
          onSearch={handleSearch}
          render={(item: Group) => item.title}
        />
      </div>
    </Card>
  )
}

export default UserGroups
