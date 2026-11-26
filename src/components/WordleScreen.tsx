import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

const WORDS = [
    'ABOUT',
    'OTHER',
    'WHICH',
    'THEIR',
    'THERE',
    'FIRST',
    'WOULD',
    'THESE',
    'CLICK',
    'PRICE',
    'STATE',
    'EMAIL',
    'WORLD',
    'MUSIC',
    'AFTER',
    'VIDEO',
    'WHERE',
    'BOOKS',
    'LINKS',
    'YEARS',
    'ORDER',
    'ITEMS',
    'GROUP',
    'UNDER',
    'GAMES',
    'COULD',
    'GREAT',
    'HOTEL',
    'STORE',
    'TERMS',
    'RIGHT',
    'LOCAL',
    'THOSE',
    'USING',
    'PHONE',
    'FORUM',
    'BASED',
    'BLACK',
    'CHECK',
    'INDEX',
    'BEING',
    'WOMEN',
    'TODAY',
    'SOUTH',
    'PAGES',
    'FOUND',
    'HOUSE',
    'PHOTO',
    'POWER',
    'WHILE',
    'THREE',
    'TOTAL',
    'PLACE',
    'THINK',
    'NORTH',
    'POSTS',
    'MEDIA',
    'SINCE',
    'GUIDE',
    'BOARD',
    'WHITE',
    'SMALL',
    'TIMES',
    'SITES',
    'LEVEL',
    'HOURS',
    'IMAGE',
    'TITLE',
    'SHALL',
    'CLASS',
    'STILL',
    'MONEY',
    'EVERY',
    'VISIT',
    'TOOLS',
    'REPLY',
    'VALUE',
    'PRESS',
    'LEARN',
    'PRINT',
    'STOCK',
    'POINT',
    'SALES',
    'LARGE',
    'TABLE',
    'START',
    'MODEL',
    'HUMAN',
]

type LetterStatus =
  | 'correct'
  | 'present'
  | 'absent';

type GuessResult = {
  word: string;
  result: LetterStatus[];
};

export default function WordleScreen() {
  const [answer, setAnswer] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );

  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const checkWord = (
    word: string
  ): LetterStatus[] => {
    const result: LetterStatus[] = Array(5).fill('absent');
    const remaining = answer.split('');

    for (let i = 0; i < 5; i++) {
      if (word[i] === answer[i]) {
        result.push('correct');
        result[i] = 'correct';
        remaining[i] = '';
    }
}
    for (let i = 0; i < 5; i ++) {
        if(result[i] !== 'correct') {
            const index = remaining.indexOf(word[i]);

            if (index !== -1) {
                result[i] = 'present';
                remaining[index] = '';
            
            }
        }

    }

    return result;
};

  const submitGuess = () => {
    if (guess.length !== 5 || gameOver) return;

    const upperGuess = guess.toUpperCase();

    const newGuess: GuessResult = {
      word: upperGuess,
      result: checkWord(upperGuess),
    };

    const updatedGuesses = [...guesses, newGuess];

    setGuesses(updatedGuesses);
    setGuess('');

    if (upperGuess === answer) {
      setGameOver(true);
    }

    if (updatedGuesses.length >= 6) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setGuesses([]);
    setGuess('');
    setGameOver(false);

    setAnswer(
        WORDS[Math.floor(Math.random() * WORDS.length)]
    );
  };

  const won = guesses.some(
    (g) => g.word === answer
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wordle</Text>

      {guesses.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.word.split('').map((letter, i) => (
            <View
              key={i}
              style={[
                styles.tile,
                row.result[i] === 'correct' &&
                  styles.green,
                row.result[i] === 'present' &&
                  styles.yellow,
                row.result[i] === 'absent' &&
                  styles.gray,
              ]}
            >
              <Text style={styles.tileText}>
                {letter}
              </Text>
            </View>
          ))}
        </View>
      ))}

      {!gameOver && (
        <>
          <TextInput
            value={guess}
            onChangeText={(text) =>
              setGuess(text.toUpperCase())
            }
            placeholder="Enter 5 letters"
            maxLength={5}
            style={styles.input}
          />

          <Pressable
            style={styles.button}
            onPress={submitGuess}
          >
            <Text style={styles.buttonText}>
              Guess
            </Text>
          </Pressable>
        </>
      )}

      {gameOver && (
        <View>
          <Text style={styles.result}>
            {won
              ? 'You  Win!'
              : 'Word was ${answer}'}
          </Text>

          <Pressable
            style={styles.button}
            onPress={resetGame}
          >
            <Text style={styles.buttonText}>
              Play Again
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },

  tile: {
    width: 55,
    height: 55,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  tileText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  green: {
    backgroundColor: '#22c55e',
  },

  yellow: {
    backgroundColor: '#eab308',
  },

  gray: {
    backgroundColor: '#333334',
  },

  input: {
    width: 200,
    borderWidth: 1,
    padding: 12,
    marginTop: 20,
    borderRadius: 8,
  },

  button: {
    marginTop: 12,
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});