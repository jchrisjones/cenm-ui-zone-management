import { Reducer } from 'redux'
import { CountActions, CountState, Constants } from './types'

// Destructing constants
const { COUNT_UP, COUNT_DOWN } = Constants

// Type-safe initialState!
export const initialState: CountState = {
  count: 1,
}

// Unfortunately, typing of the `action` parameter seems to be broken at the moment.
// This should be fixed in Redux 4.x, but for now, just augment your types.
const reducer: Reducer<CountState> = (
  state: CountState = initialState,
  action,
) => {
  // We'll augment the action type on the switch case
  // to make sure we have all the cases handled.
  switch ((action as CountActions).type) {
    case COUNT_UP:
      return {
        ...state,
        count: state.count + action.payload,
      }
    case COUNT_DOWN:
      return {
        ...state,
        count: state.count - action.payload,
      }
    default:
      return state
  }
}

export default reducer
