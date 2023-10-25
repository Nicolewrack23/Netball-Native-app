import React from "react";
import { View, Text } from "react-native";

const ResultPage = ({ route }) => {
  const { updatedRoundData } = route.params;
  console.log("results: ", updatedRoundData);

  // Extract the round data from the object
  const roundsData = updatedRoundData[1]; // Assuming round data is stored in the key 1
  console.log(roundsData);
  return (
    <View>
      {updatedRoundData ? (
        <View>
          <Text>Round: {updatedRoundData.Rounds}</Text>
          <Text>Selected Date: {updatedRoundData.SelectedDate}</Text>
          <Text>Team 1: {updatedRoundData.Team1}</Text>
          <Text>Team 2: {updatedRoundData.Team2}</Text>
          <Text>Team 1 Score: {roundsData.team1Score}</Text>
          <Text>Team 2 Score: {roundsData.team2Score}</Text>
          <Text>Team 1 Score GS: {roundsData.team1ScoreGS}</Text>
          <Text>Team 1 Score GA: {roundsData.team1ScoreGA}</Text>
          <Text>Team 2 Score GS: {roundsData.team2ScoreGS}</Text>
          <Text>Team 2 Score GA: {roundsData.team2ScoreGA}</Text>
        </View>
      ) : (
        <Text>No data available.</Text>
      )}
    </View>
  );
};

export default ResultPage;

// const Data = {
//   1: {
//     team1Score: 2,
//     team1ScoreGA: 0,
//     team1ScoreGS: 2,
//     team2Score: 3,
//     team2ScoreGA: 1,
//     team2ScoreGS: 2,
//   },
//   Rounds: 1,
//   SelectedDate: "Wed Oct 25 2023 12:57:18 GMT+1300",
//   Team1: "Team 1",
//   Team2: "Team 2",
// };
