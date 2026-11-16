import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#2563eb',
      }}
    >
      <Tabs.Screen
        name="games"
        options={{ title: 'Games', tabBarLabel: 'Games' }}
      />
      <Tabs.Screen
        name="stats"
        options={{ title: 'Statistics', tabBarLabel: 'Stats' }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
