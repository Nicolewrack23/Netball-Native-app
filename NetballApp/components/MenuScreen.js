import { View, Text, Pressable, StyleSheet } from "react-native";
import AppPages from "../AppPages";

export default function ButtonContainer({ goToPage }) {
  return (
    <View style={styles.MenuContainer}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttons}>
          <Text>Game Records</Text>
        </Pressable>
        <Pressable
          style={styles.buttons}
          onPress={() => goToPage(AppPages.GameDay)}
        >
          <Text>Game Day</Text>
        </Pressable>
        <Pressable style={styles.buttons}>
          <Text>Team Info</Text>
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
