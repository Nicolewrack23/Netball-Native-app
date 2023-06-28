import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const CounterBoard = ({ value, onDecrement, label }) => {
  return (
    <View style={styles.container}>
      {label === "team 1" && (
        <>
          <View style={styles.scoreContainer}>
            <Pressable onPress={onDecrement}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.teamContainer}>
            <View style={styles.scoresContainer}>
              <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>{value}</Text>
              </View>
            </View>
          </View>
        </>
      )}
      {label === "team 2" && (
        <>
          <View style={styles.teamContainer}>
            <View style={styles.scoresContainer}>
              <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>{value}</Text>
              </View>
            </View>
          </View>
          <View style={styles.scoreContainer}>
            <Pressable onPress={onDecrement}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default CounterBoard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  //   flippedContainer: {
  //     justifyContent: "flex-end",
  //   },
  buttonText: {
    fontSize: 20,
  },
  scoreContainer: {
    marginHorizontal: 10,
  },
  teamContainer: {
    marginLeft: 20,
  },
  scoresContainer: {
    marginRight: 20,
  },
  scoreText: {
    fontSize: 18,
  },
});
