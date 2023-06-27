import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ButtonContainer({ navigation }) {
  return (
    <View style={styles.MenuContainer}>
      <View style={styles.buttonContainer}>
        <Pressable disabled style={styles.buttons}>
          <Text>Game Records</Text>
          <Text>Coming soon</Text>
        </Pressable>
        <Pressable
          style={styles.buttons}
          onPress={() => navigation.navigate("GameDay")}
        >
          <Text>Game Day</Text>
        </Pressable>
        <Pressable disabled style={styles.buttons}>
          <Text>Team Info</Text>
          <Text>Coming soon</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MenuContainer: {
    height: "100%",
    justifyContent: "center",
  },
  buttonContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
    rowGap: 10,
  },
  buttons: {
    flexBasis: "40%",
    paddingVertical: 40,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
  },
});
