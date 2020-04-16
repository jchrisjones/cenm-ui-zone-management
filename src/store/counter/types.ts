import { Action } from 'redux'

export enum Constants {
  COUNT_UP = '@@count/COUNT_UP',
  COUNT_DOWN = '@@count/COUNT_DOWN',
}

export interface CountState {
  count: number
}

export interface CountUpAction extends Action {
  type: Constants.COUNT_UP
  payload: number
}

export interface CountDownAction extends Action {
  type: Constants.COUNT_DOWN
  payload: number
}

// Down here, we'll create a discriminated union type
// of all actions which will be used for our reducer.
export type CountActions = CountUpAction | CountDownAction
