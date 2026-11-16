import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const games = [
  { id: 'wordle', name: 'Word Game' },
  { id: 'memory', name: 'Memory Game' },
  { id: 'reaction', name: 'Reaction Game' },
  { id: 'trivia', name: 'Trivia' },
];

export default function GamesScreen() {
  const openGame = (id: string) => {
    router.push({
      pathname: '/game/[id]',
      params: { id },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Games</Text>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <Pressable
            style={styles.gameBox}
            onPress={() => openGame(item.id)}
          >
            <Text style={styles.gameName}>{item.name}</Text>
          </Pressable>
        )}
      />
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  gameBox: {
    flex: 1,
    height: 140,
    marginHorizontal: 5,
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameName: {
    fontSize: 16,
    fontWeight: '600',
  },
});
