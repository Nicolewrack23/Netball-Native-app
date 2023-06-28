import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Counter = ({ onIncrementGS, onIncrementGA }) => {
  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <View style={styles.scoreContainer}>
          <Pressable onPress={onIncrementGS}>
            <Text style={styles.buttonText}>GS</Text>
          </Pressable>
        </View>
        <View style={styles.scoreContainer}>
          <Pressable onPress={onIncrementGA}>
            <Text style={styles.buttonText}>GA</Text>
          </Pressable>
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
    flexDirection: "column", // Added to stack "GS" and "GA" vertically
  },
  scoreContainer: {
    marginBottom: 10, // Added margin to separate "GS" and "GA"
  },
  scoreText: {
    fontSize: 18,
  },
});
