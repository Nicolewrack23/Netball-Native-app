import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Counter = ({ value, onIncrementGS, onIncrementGA, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <View style={styles.teamContainer}>
        <View style={styles.scoresContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>GS: {value}</Text>
            <Pressable onPress={onIncrementGS}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>GA: {value}</Text>
            <Pressable onPress={onIncrementGA}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
  },
  teamContainer: {
    marginLeft: 20,
  },
  scoresContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreContainer: {
    marginRight: 20,
  },
  scoreText: {
    fontSize: 18,
  },
});
