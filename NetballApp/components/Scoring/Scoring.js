import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import CountDown from "react-native-countdown-component";
import Counter from "./Counter";

const ScoringPage = ({ route, navigate }) => {
  const { newGameData } = route.params;
  const timer = parseInt(newGameData.timePerRound);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [team1ScoreGS, setTeam1ScoreGS] = useState(0);
  const [team1ScoreGA, setTeam1ScoreGA] = useState(0);
  const [team2ScoreGS, setTeam2ScoreGS] = useState(0);
  const [team2ScoreGA, setTeam2ScoreGA] = useState(0);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  const incrementTeamScoreGS = (team) => {
    if (team === 1) {
      setTeam1ScoreGS(team1ScoreGS + 1);
      setTeam1Score(team1Score + 1);
    } else if (team === 2) {
      setTeam2ScoreGS(team2ScoreGS + 1);
      setTeam2Score(team2Score + 1);
    }
  };

  const incrementTeamScoreGA = (team) => {
    if (team === 1) {
      setTeam1ScoreGA(team1ScoreGA + 1);
      setTeam1Score(team1Score + 1);
    } else if (team === 2) {
      setTeam2ScoreGA(team2ScoreGA + 1);
      setTeam2Score(team2Score + 1);
    }
  };

  const decrementTeamScore = (team) => {
    if (team === 1) {
      if (team1Score > 0) {
        setTeam1Score(team1Score - 1);
      } else {
        return;
      }
    } else if (team === 2) {
      if (team2Score > 0) {
        setTeam2Score(team2Score - 1);
      } else {
        return;
      }
    }
  };

  const handleTimerToggle = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Round: {newGameData.rounds}</Text>
      <Text>{newGameData.team1}</Text>
      <Text>{newGameData.team2}</Text>
      <Text>{timer}</Text>
      <View>
        <CountDown
          until={60 * timer}
          size={30}
          onFinish={() => alert("Finished")}
          digitStyle={{ backgroundColor: "#FFF" }}
          digitTxtStyle={{ color: "#1CC625" }}
          timeToShow={["M", "S"]}
          timeLabels={{ m: "MM", s: "SS" }}
          running={isTimerRunning}
        />
      </View>
      <Pressable onPress={handleTimerToggle}>
        <Text>{isTimerRunning ? "Stop" : "Start"} Timer</Text>
      </Pressable>

      <View>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>Team 1</Text>
        <Counter
          value={team1Score}
          onIncrementGS={() => incrementTeamScoreGS(1)}
          onIncrementGA={() => incrementTeamScoreGA(1)}
          onDecrement={() => decrementTeamScore(1)}
        />

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>Team 2</Text>
          <Counter
            value={team2Score}
            onIncrementGS={() => incrementTeamScoreGS(2)}
            onIncrementGA={() => incrementTeamScoreGA(2)}
            onDecrement={() => decrementTeamScore(2)}
          />
        </View>
      </View>
    </View>
  );
};

export default ScoringPage;
