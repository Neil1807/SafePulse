import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "../global.css";



export default function RootLayout() {
  

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack initialRouteName='signup'
             screenOptions={{
              animation: 'fade',
              contentStyle: { backgroundColor: '#3723A9'}
            }}
             >

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{headerShown: false}}/>
        <Stack.Screen name="login" options={{headerShown: false}}/>
        
      
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
