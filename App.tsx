import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
    const [ fontsLoaded ] = useFonts({
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'SourceSans-Regular': require('./assets/fonts/SourceSans-Regular.ttf')
    })
  
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }

    return (
      <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen 
          name='Registration'
          component={RegistrationScreen}
          options={{ headerShown: false}}
          />
          <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
