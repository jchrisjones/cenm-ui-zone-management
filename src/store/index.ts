import { combineReducers, Reducer } from 'redux'

// Type imports
import { CountState } from './counter/types'

// Reducers imports
import countReducer from './counter/reducer'

// The top-level state object
export interface ApplicationState {
  countState: CountState
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  countState: countReducer,
})
