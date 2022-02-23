import React from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context'

import { Router } from './routes'

export const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Router />
    </SafeAreaProvider>
  )
}

App.displayName = 'App'
