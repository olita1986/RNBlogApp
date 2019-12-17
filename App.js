import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const MainStack = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
)

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const App = createAppContainer(RootStack);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}