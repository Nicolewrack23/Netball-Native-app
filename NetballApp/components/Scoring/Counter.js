import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Counter = ({ label, onIncrementGS, onIncrementGA }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreButtonContainer}>
        <Pressable
          style={[
            styles.onIncrementGS,
            label === "team 1" && styles.team1Color,
            label === "team 2" && styles.team2Color,
          ]}
          onPress={onIncrementGS}
        >
          <Text
            style={[styles.buttonText, label === "team 2" && styles.team2Color]}
          >
            GS
          </Text>
        </Pressable>
      </View>
      <View style={styles.scoreButtonContainer}>
        <Pressable
          style={[
            styles.onIncrementGA,
            label === "team 1" && styles.team1Color,
            label === "team 2" && styles.team2Color,
          ]}
          onPress={onIncrementGA}
        >
          <Text
            style={[styles.buttonText, label === "team 2" && styles.team2Color]}
          >
            GA
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "45%",
    margin: 10,
    marginBottom: 15,
    gap: 10,
  },
  scoreButtonContainer: {
    height: "49%",
  },
  onIncrementGS: {
    height: "100%",
    borderRadius: 15,
    justifyContent: "center",
  },
  onIncrementGA: {
    height: "100%",
    borderRadius: 15,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
  team1Color: {
    backgroundColor: "#FB8500",
  },
  team2Color: {
    backgroundColor: "#FFB703",
    color: "black",
  },
  scoreText: {
    fontSize: 18,
  },
});
