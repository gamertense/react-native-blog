import React, { useState } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext'

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
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
