import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CounterBoard = ({ value, onDecrement, label }) => {
  return (
    <View style={styles.container}>
      {label === "team 1" && (
        <>
          <View style={styles.buttonContainer}>
            <Pressable onPress={onDecrement}>
              <Icon name="remove" size={30} color="#ffffff" />
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
          <View style={styles.buttonContainer}>
            <Pressable onPress={onDecrement}>
              <Icon name="remove" size={30} color="#ffffff" />
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
  buttonContainer: {
    backgroundColor: "red",
    padding: 5,
    paddingHorizontal: 5,
    borderRadius: 50,
    backgroundColor: "#023047",
  },
  buttonText: {
    fontSize: 30,
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
    fontSize: 40,
    fontWeight: 400,
  },
});
