import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { History } from 'history'

// Import the state interface and our combined reducers.
import { ApplicationState, rootReducer } from './store'

export default function configureStore(
  history: History,
  initialState: ApplicationState,
): Store<ApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({})

  // We'll create our store with the combined reducers and the initial Redux state that
  // we'll be passing from our entry point.
  return createStore<ApplicationState, any, any, any>(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  )
}
