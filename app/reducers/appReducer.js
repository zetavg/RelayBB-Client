import { handleActions } from 'redux-actions'
import { REHYDRATE } from 'redux-persist/constants'

export default handleActions({
  [REHYDRATE]: state => ({
    ...state,
    stateReady: true,
  }),
}, { stateReady: false })
