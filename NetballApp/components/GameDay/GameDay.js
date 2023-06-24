import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import DatePicker from "./DatePicker";
import InputSpinner from "react-native-input-spinner";
import RoundsSelection from "./RoundsSelection";
import { storeData } from "../Utils/LocalStorage";

const GameDay = () => {
  const [team1, setTeam1] = useState("Team 1");
  const [team2, setTeam2] = useState("Team 2");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedRound, setSelectedRound] = useState(2);
  const [timePerRound, setTimePerRound] = useState(10);

  const handleValueChange = (timePerRound) => {
    setTimePerRound(timePerRound);
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const savingGameInfo = async () => {
    const newGameData = {
      team1: team1,
      team2: team2,
      selectedDate: selectedDate.toString(),
      rounds: selectedRound,
      timePerRound: timePerRound,
    };
    // Save or process newGameData as needed
    console.log(newGameData);
    // await storeData(newGameData);
  };

  return (
    <>
      <View style={styles.centeringContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.headingGamePlan}>
            <Text style={styles.headingFontSize}>Game Plan</Text>
          </View>
          <View style={styles.groupingTextInput}>
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

          <View style={styles.groupingTextInput}>
            <Text style={[styles.groupText, styles.fontSize]}>
              Time (Per Round)
            </Text>
            <View style={styles.timeInput}>
              <InputSpinner
                max={60}
                min={0}
                step={1}
                value={timePerRound}
                buttonFontSize={34}
                fontSize={24}
                colorLeft="#219EBC"
                colorRight="#219EBC"
                colorPress="#8ECAE6"
                skin="square"
                onChange={handleValueChange}
              />
            </View>
          </View>
          <View style={styles.groupingActionButtons}>
            <Pressable disabled style={styles.actionButtons}>
              <Text style={styles.actionButtonText}>Store Game</Text>
            </Pressable>
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
  headingFontSize: {
    color: "#023047",
    fontSize: 24,
    marginTop: 40,
  },
  fontSize: {
    color: "#023047",
    fontSize: 18,
  },
  centeringContainer: { width: "100%" },
  buttonContainer: {
    height: "100%",
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
  timeInput: {
    paddingHorizontal: 10,
  },
  groupingActionButtons: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
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
