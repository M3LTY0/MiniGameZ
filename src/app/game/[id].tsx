import { useLocalSearchParams } from 'expo-router';
import WordleScreen from '../../components/WordleScreen';
import { View, Text } from 'react-native';

export default function GameScreen() {
  const { id } = useLocalSearchParams();

  switch (id) {
    case 'wordle':
      return <WordleScreen />;

    default:
      return (
        <View>
          <Text>Game not found</Text>
        </View>
      );
  }
}