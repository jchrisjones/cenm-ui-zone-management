import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { ApplicationState } from '../../store'
import { CountState, CountActions } from '../../store/counter/types'
import * as actions from '../../store/counter/actions'

import { Button } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

type Props = ReduxType & ApplicationState

const Home: React.FC<Props> = ({
  count,
  increment,
  decrement,
}): JSX.Element => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <h2>Counter:</h2>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button type='primary' size='small' onClick={() => decrement(1)}>
        <MinusOutlined />
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2>{count}</h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button type='primary' size='small' onClick={() => increment(1)}>
        <PlusOutlined />
      </Button>
    </div>
  </div>
)

const mapStateToProps = ({ countState }: ApplicationState): CountState => {
  const { count } = countState
  return { count }
}

const mapDispatchToProps = (dispatch: Dispatch<CountActions>) => ({
  increment: (count: number) => dispatch(actions.addToCounter(count)),
  decrement: (count: number) => dispatch(actions.subtractCounter(count)),
})

type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(Home)
