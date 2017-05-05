import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import reducer from 'reducers'


import { AsyncStorage } from 'react-native'

export const store = createStore(
  reducer,
  undefined,
)

persistStore(store, {
  storage: AsyncStorage,
  whitelist: [],
})

export default store
