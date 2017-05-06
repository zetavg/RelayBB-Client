import { combineReducers } from 'redux'
import appReducer from './appReducer'
import navigationReducer from './navigationReducer'

export default combineReducers({
  app: appReducer,
  navigation: navigationReducer,
})
