import { Stack } from "expo-router";
import '../app/globals.css';

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
    name='(tabs)'
    options={{headerShown: false}}
    />
    <Stack.Screen
        name='Dreams/[id]'
        options={{headerShown: false}}
    />

  </Stack>;
}
