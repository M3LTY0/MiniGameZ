import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      {['Account Settings', 'Appearance', 'Notifications', 'About'].map((item) => (
        <View key={item} style={styles.settingOption}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingOption: {
    padding: 20,
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    marginBottom: 12,
  },
});
