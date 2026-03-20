import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 70,
          borderRadius: 30,
          backgroundColor: '#fff',

          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 20,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="scan" />
      <Tabs.Screen name="cart" />
    </Tabs>
  );
}