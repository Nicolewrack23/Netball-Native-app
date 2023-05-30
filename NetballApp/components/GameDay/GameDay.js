import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import InputSpinner from "react-native-input-spinner";

const GameDay = () => {
  const [team1, setTeam1] = useState("Team 1");
  const [team2, setTeam2] = useState("Team 2");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [value, setValue] = useState(5);

  const handleValueChange = (value) => {
    setValue(value);
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
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
          <View style={styles.groupingTextInput}>
            <Text style={[styles.groupText, styles.fontSize]}>Date</Text>
            <Pressable
              style={styles.input}
              onPress={() => setShowDatePicker(true)}
            >
              <Text>{selectedDate.toDateString()}</Text>
            </Pressable>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
              style={styles.dateTimePicker}
            />
          )}

          <View style={styles.roundGrouping}>
            <Text style={[styles.roundText, styles.fontSize]}>Rounds</Text>
            <View style={styles.roundButtonSpacing}>
              <Pressable style={styles.roundButtons}>
                <Text style={styles.fontSize}>1</Text>
              </Pressable>
              <Pressable style={styles.roundButtons}>
                <Text style={styles.fontSize}>2</Text>
              </Pressable>
              <Pressable style={styles.roundButtons}>
                <Text style={styles.fontSize}>3</Text>
              </Pressable>
              <Pressable style={styles.roundButtons}>
                <Text style={styles.fontSize}>4</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.groupingTextInput}>
            <Text style={[styles.groupText, styles.fontSize]}>
              Time (Per Round)
            </Text>
            <View style={styles.timeInput}>
              <InputSpinner
                max={60}
                min={0}
                step={5}
                value={value}
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
            <Pressable style={styles.actionButtons}>
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
