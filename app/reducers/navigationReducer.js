import { NavigationActions } from 'react-navigation'
import { RootStack } from 'app/navigator/RootStackNavigator'
import { MainTab } from 'app/navigator/MainTabNavigator'
import { MainTabStack } from 'app/navigator/MainTabStackNavigator'

const rootStackInitialState = RootStack.router.getStateForAction(
  RootStack.router.getActionForPathAndParams('main'),
)

const mainTabInitialState = MainTab.router.getStateForAction(
  MainTab.router.getActionForPathAndParams('groupsTab'),
)

const getMainTabStackInitialStateForDefaultPath = defaultPath => (
  MainTabStack.router.getStateForAction(
    MainTabStack.router.getActionForPathAndParams(defaultPath),
  )
)

const initialState = {
  rootStack: rootStackInitialState,
  mainTab: mainTabInitialState,
  mainTabStacks: {
    groupsTab: getMainTabStackInitialStateForDefaultPath('groups'),
    profileTab: getMainTabStackInitialStateForDefaultPath('profile'),
  },
}

export default (state = initialState, action) => {
  if (action.type === NavigationActions.back().type && !action.key && !action.for) {
    action.for = 'currentMainTabStack'
  }

  const rootStackCurrentState = state.rootStack
  const rootStackNextState = (!action.for || action.for === 'rootStack') ?
    RootStack.router.getStateForAction(action, rootStackCurrentState) : null
  const mainTabCurrentState = state.mainTab
  const mainTabNextState = (!action.for || action.for === 'mainTab') ?
    MainTab.router.getStateForAction(action, mainTabCurrentState) : null
  const currentMainTabStack = state.mainTab.routes[state.mainTab.index].routeName
  const currentMainTabStackCurrentState = state.mainTabStacks[currentMainTabStack]
  const currentMainTabStackNextState = (!action.for || action.for === 'currentMainTabStack') ?
    MainTabStack.router.getStateForAction(action, currentMainTabStackCurrentState) : null

  const nextState = {
    ...state,
  }

  if (rootStackNextState) {
    nextState.rootStack = rootStackNextState
  }

  if (mainTabNextState) {
    nextState.mainTab = mainTabNextState
  }

  if (currentMainTabStackNextState) {
    nextState.mainTabStacks[currentMainTabStack] = currentMainTabStackNextState
  }

  return nextState
}
