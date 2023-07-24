import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const CountdownTimer = () => {
  const [initialMinutes, setInitialMinutes] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartTimer = () => {
    const minutes = parseInt(initialMinutes);
    if (!isNaN(minutes) && minutes > 0) {
      setInitialMinutes('');
      setTimeRemaining(minutes * 60);
      setIsRunning(true);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
      {!isRunning && (
        <TextInput
          style={styles.input}
          placeholder="Set minutes"
          value={initialMinutes}
          onChangeText={setInitialMinutes}
          keyboardType="numeric"
        />
      )}
      {!isRunning ? (
        <Button title="Start Timer" onPress={handleStartTimer} />
      ) : (
        <Button title="Stop Timer" onPress={() => setIsRunning(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CountdownTimer;
