import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '~/screens'

const { Screen, Navigator } = createNativeStackNavigator()

export const Router = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="HomeScreen" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
