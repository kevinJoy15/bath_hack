import { Stack } from "expo-router";
import '../app/globals.css';
import { LatestDreamProvider } from '@/context/LatestDreamContext';

export default function RootLayout() {
  return (
    <LatestDreamProvider>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Dreams/[id]'
          options={{ headerShown: false }}
        />
      </Stack>
    </LatestDreamProvider>
  );
}
