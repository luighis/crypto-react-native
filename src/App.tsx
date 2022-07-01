import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import AddCryptoScreen from './screens/AddCryptoScreen/AddCryptoScreen'
import { RootStackParamList } from './screens/RootStackPrams'
import Header from './common/header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import IconArrowLeft from './components/iconArrowLeft'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen
          name="AddCrypto"
          component={AddCryptoScreen}
          options={({ navigation }) => ({
            headerTransparent: true,
            title: '',
            headerLeft: () => (
              <IconArrowLeft onPress={() => navigation.goBack()} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default App
