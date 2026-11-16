import { View, Text, StyleSheet } from 'react-native';

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Statistics</Text>

      <View style={styles.statBox}>
        <Text>Total Games Played</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <View style={styles.statBox}>
        <Text>Favourite Game</Text>
        <Text style={styles.value}>None yet</Text>
      </View>

      <View style={styles.statBox}>
        <Text>Games Won</Text>
        <Text style={styles.value}>0</Text>
      </View>
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
  statBox: {
    padding: 20,
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    marginBottom: 15,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
