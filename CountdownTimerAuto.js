import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CountdownTimerAuto = () => {
  const initialMinutes = 10;
  const [timeRemaining, setTimeRemaining] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const handleStopTimer = () => {
    setIsRunning(false);
  };

  const handleStartTimer = () => {
    setIsRunning(true);
    setTimeRemaining(initialMinutes * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
      <Text style={styles.timerText}>pippo</Text>
      {/* {!isRunning ? (
        <Button title="Start Timer" onPress={handleStartTimer} />
      ) : (
        <Button title="Stop Timer" onPress={handleStopTimer} />
      )} */}
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
});

export default CountdownTimerAuto;
