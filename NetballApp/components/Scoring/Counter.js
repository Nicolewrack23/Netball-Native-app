import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Counter = ({ label, onIncrementGS, onIncrementGA }) => {
  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <View style={styles.scoreContainer}>
          <Pressable
            style={[
              styles.onIncrementGS,
              label === "team 1" && styles.team1Color,
              label === "team 2" && styles.team2Color,
            ]}
            onPress={onIncrementGS}
          >
            <Text
              style={[
                styles.buttonText,
                label === "team 2" && styles.team2Color,
              ]}
            >
              GS
            </Text>
          </Pressable>
        </View>
        <View style={styles.scoreContainer}>
          <Pressable
            style={[
              styles.onIncrementGA,
              label === "team 1" && styles.team1Color,
              label === "team 2" && styles.team2Color,
            ]}
            onPress={onIncrementGA}
          >
            <Text
              style={[
                styles.buttonText,
                label === "team 2" && styles.team2Color,
              ]}
            >
              GA
            </Text>
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
  },
  onIncrementGS: {
    padding: 50,
    borderRadius: 15,
  },
  onIncrementGA: { backgroundColor: "#FB8500", padding: 50, borderRadius: 15 },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  team1Color: {
    backgroundColor: "#FB8500",
  },
  team2Color: {
    backgroundColor: "#FFB703",
    color: "black",
  },
  teamContainer: {
    gap: 10,
    flexDirection: "column", // Added to stack "GS" and "GA" vertically
  },
  scoreText: {
    fontSize: 18,
  },
});
