import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Feed from './src/screens/Feed';
import SinglePost from './src/screens/SinglePost';
import ThemeContext, { themes } from './src/Contexts/ThemeProvider';
import { Storage } from 'expo-storage';
import { useState, useEffect } from 'react';
import { getTheme } from './src/services/storageTheme';


const Stack = createNativeStackNavigator();
export default function App() {
  let themeData
  useEffect(() => {
    (async () => {
      themeData = await getTheme()
      setDarkMode(themeData)
    })()
  }, [])

  const [darkMode, setDarkMode] = useState()

  const darkModeData = { darkMode, setDarkMode }
  return (
    <ThemeContext.Provider value={darkModeData}>
      <NavigationContainer theme={darkMode ? themes.DARK : themes.LIGHT}>
        <StatusBar hidden={true} />
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} options={styleOptions} />
          <Stack.Screen name="feed" component={Feed} options={styleOptions} />
          <Stack.Screen name="singlepost" component={SinglePost} options={styleOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  )
}

const styleOptions = {
  headerShown: false
}