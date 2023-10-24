import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import DatePicker from "./DatePicker";
import RoundsSelection from "./RoundsSelection";

const GameDay = ({ navigation }) => {
  const [team1, setTeam1] = useState("Team 1");
  const [team2, setTeam2] = useState("Team 2");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedRound, setSelectedRound] = useState(2);

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const savingGameInfo = async () => {
    const newGameData = {
      Team1: team1,
      Team2: team2,
      SelectedDate: selectedDate.toString(),
      Rounds: selectedRound,
    };
    navigation.navigate("ScoringPage", { newGameData });
  };

  return (
    <>
      <View style={styles.centeringContainer}>
        <View style={styles.buttonContainer}>
          <View style={[styles.groupingTextInput, styles.topMargin]}>
            <Text style={[styles.groupText, styles.fontSize]}>Team Name</Text>
            <TextInput
              onChangeText={setTeam1}
              style={styles.input}
              placeholder="Team 1"
            />
          </View>
          <View style={styles.groupingTextInput}>
            <Text style={[styles.groupText, styles.fontSize]}>
              Opposing Team
            </Text>
            <TextInput
              onChangeText={setTeam2}
              style={styles.input}
              placeholder="Team 2"
            />
          </View>
          <DatePicker
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />

          <RoundsSelection
            handleRoundSelection={setSelectedRound}
            selectedRound={selectedRound}
          />
          <View style={styles.groupingActionButtons}>
            <Pressable onPress={savingGameInfo} style={styles.actionButtons}>
              <Text style={styles.actionButtonText}>Play Game</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default GameDay;

const styles = StyleSheet.create({
  topMargin: {
    marginTop: 35,
  },
  fontSize: {
    color: "#023047",
    fontSize: 18,
  },
  centeringContainer: { width: "100%" },
  buttonContainer: {
    height: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
    rowGap: 10,
  },
  headingGamePlan: {
    width: "100%",
    alignItems: "center",
    margin: 5,
  },
  groupingTextInput: {
    width: "95%",
    justifyContent: "center",
  },
  groupText: {
    width: "95%",
    alignSelf: "center",
    paddingHorizontal: 5,
    paddingBottom: 2,
  },
  input: {
    borderWidth: 2,
    borderColor: "#E6E6E6",
    borderRadius: 5,
    marginHorizontal: 12,
    padding: 10,
    fontSize: 16,
  },

  groupingActionButtons: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
    marginVertical: 10,
  },
  actionButtons: {
    backgroundColor: "#219EBC",
    padding: 15,
    borderRadius: 10,
    width: "49%",
  },
  actionButtonText: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22,
  },
});
