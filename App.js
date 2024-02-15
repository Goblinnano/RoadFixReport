import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Sign_Up from './screens/Sign_Up';
import Home from './screens/Home';
import General from './screens/General';
import Detail from './screens/Detail';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{headerShown: false}}
        />  
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="Sing_Up"
          component={Sign_Up}
          options={{ title: 'Back' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="General"
          component={General}
          options={{ title: 'Welcome ' }}
        />
                
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App