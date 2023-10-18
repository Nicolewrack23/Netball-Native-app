import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Counter from "./Counter";
import CounterBoard from "./CounterBoard";

const ScoringPage = ({ route, navigate }) => {
  const { newGameData } = route.params;
  const totalRounds = parseInt(newGameData.Rounds);
  const [currentRound, setCurrentRound] = useState(1);

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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.roundText}>Round: {currentRound}</Text>
        <View style={styles.alignTeamItems}>
          <Text style={styles.teamText}>{newGameData.Team1}</Text>
          <Text>VS</Text>
          <Text style={styles.teamText}>{newGameData.Team2}</Text>
        </View>
      </View>

      <View style={styles.counterBoardContainer}>
        <CounterBoard
          label={"team 1"}
          onDecrement={() => decrementTeamScore(1)}
          value={team1Score}
        />
        <Text>VS</Text>
        <CounterBoard
          label={"team 2"}
          onDecrement={() => decrementTeamScore(2)}
          value={team2Score}
        />
      </View>
      <View style={styles.counterContainer}>
        <Counter
          label={"team 1"}
          onIncrementGS={() => incrementTeamScoreGS(1)}
          onIncrementGA={() => incrementTeamScoreGA(1)}
        />
        <Counter
          label={"team 2"}
          onIncrementGS={() => incrementTeamScoreGS(2)}
          onIncrementGA={() => incrementTeamScoreGA(2)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  roundText: {
    fontSize: 18,
    margin: 10,
  },
  teamText: {
    fontSize: 16,
    marginBottom: 5,
  },
  alignTeamItems: {
    flexDirection: "row",
    columnGap: 15,
  },
  counterContainer: {
    flexDirection: "row",
    height: "33%",
  },
  counterBoardContainer: {
    flexDirection: "row",
  },
});

export default ScoringPage;
