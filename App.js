import React, { useState } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'

import { Provider } from './src/context/BlogContext'

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
)

const App = createAppContainer(AppNavigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
