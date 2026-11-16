import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profilePicture}>
          <Text>Photo</Text>
        </View>

        <Text style={styles.username}>Username</Text>
        <Text>Favourite Game: None</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/profile/settings')}
      >
        <Text>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    padding: 18,
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
  },
});
