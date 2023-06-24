import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ selectedDate, handleDateChange }) => {
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const handleDatePickerPress = () => {
    setShowDatePicker(true);
  };

  const handleDateChangeInternal = (date) => {
    setShowDatePicker(false);
    if (date) {
      handleDateChange(date);
    }
  };

  return (
    <View style={styles.groupingTextInput}>
      <Text style={[styles.groupText, styles.fontSize]}>Date</Text>
      <Pressable style={styles.input} onPress={handleDatePickerPress}>
        <Text>{selectedDate.toDateString()}</Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChangeInternal}
          style={styles.dateTimePicker}
        />
      )}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
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
  dateTimePicker: {
    width: "100%",
  },
});
