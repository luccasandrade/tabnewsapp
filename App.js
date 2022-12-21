import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/login';
import Feed from './src/screens/Feed';
import SinglePost from './src/screens/SinglePost';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={styleOptions} />
        <Stack.Screen name="feed" component={Feed} options={styleOptions} />
        <Stack.Screen name="singlepost" component={SinglePost} options={styleOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styleOptions = {
  headerShown: false
}