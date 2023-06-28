import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const CounterBoard = ({ value, onDecrement, label }) => {
  return (
    <View
      style={[
        label === "team 2" && styles.flippedCounterContainer,
        styles.container,
      ]}
    >
      <Pressable onPress={onDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <View style={styles.teamContainer}>
        <View style={styles.scoresContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>{value}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CounterBoard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  flippedCounterContainer: {
    transform: [{ scaleX: -1 }],
  },
  buttonText: {
    fontSize: 20,
  },
  teamContainer: {
    marginLeft: 20,
  },
  scoresContainer: {
    marginRight: 20,
  },
  scoreContainer: {
    marginRight: 20,
  },
  scoreText: {
    fontSize: 18,
  },
});
