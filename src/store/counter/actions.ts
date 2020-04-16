import { ActionCreator } from 'redux'
import { CountActions, Constants } from './types'

// Type these action creators with `: ActionCreator<ActionTypeYouWantToPass>`.
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly.

export const addToCounter: ActionCreator<CountActions> = count => ({
  type: Constants.COUNT_UP,
  payload: count,
})

export const subtractCounter: ActionCreator<CountActions> = count => ({
  type: Constants.COUNT_DOWN,
  payload: count,
})
