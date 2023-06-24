import { View, Text, Pressable, StyleSheet } from "react-native";

const RoundsSelection = ({ handleRoundSelection, selectedRound }) => {
  return (
    <View style={styles.roundGrouping}>
      <Text style={[styles.roundText, styles.fontSize]}>Rounds</Text>
      <View style={styles.roundButtonSpacing}>
        <Pressable
          style={[
            styles.roundButtons,
            selectedRound === 1 && styles.selectedRound,
          ]}
          onPress={() => handleRoundSelection(1)}
        >
          <Text style={styles.fontSize}>1</Text>
        </Pressable>
        <Pressable
          style={[
            styles.roundButtons,
            selectedRound === 2 && styles.selectedRound,
          ]}
          onPress={() => handleRoundSelection(2)}
        >
          <Text style={styles.fontSize}>2</Text>
        </Pressable>
        <Pressable
          style={[
            styles.roundButtons,
            selectedRound === 3 && styles.selectedRound,
          ]}
          onPress={() => handleRoundSelection(3)}
        >
          <Text style={styles.fontSize}>3</Text>
        </Pressable>
        <Pressable
          style={[
            styles.roundButtons,
            selectedRound === 4 && styles.selectedRound,
          ]}
          onPress={() => handleRoundSelection(4)}
        >
          <Text style={styles.fontSize}>4</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedRound: {
    borderColor: "#219EBC",
  },
  roundGrouping: {
    width: "100%",
  },
  roundText: {
    paddingHorizontal: 25,
    paddingBottom: 2,
  },
  roundButtonSpacing: {
    width: "100%",
    paddingHorizontal: 25,
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: 10,
    rowGap: 10,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  roundButtons: {
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "#E6E6E6",
    borderWidth: 2,
    alignItems: "center",
  },
  fontSize: {
    fontSize: 18,
  },
});
export default RoundsSelection;
