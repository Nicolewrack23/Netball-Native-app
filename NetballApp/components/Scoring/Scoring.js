import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import CountDown from "react-native-countdown-component";
import Counter from "./Counter";
import CounterBoard from "./CounterBoard";

const ScoringPage = ({ route, navigate }) => {
  const { newGameData } = route.params;
  const totalRounds = parseInt(newGameData.rounds);
  const timer = parseInt(newGameData.timePerRound);
  const [currentRound, setCurrentRound] = useState(1);
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

  const handleTimerFinish = () => {
    if (currentRound < totalRounds) {
      setCurrentRound(currentRound + 1);
      setIsTimerRunning(false);
    } else {
      alert("All rounds completed!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.roundText}>Round: {currentRound}</Text>
      <Text style={styles.teamText}>{newGameData.team1}</Text>
      <Text>VS</Text>
      <Text style={styles.teamText}>{newGameData.team2}</Text>
      <View style={styles.countdownContainer}>
        <CountDown
          until={60 * timer}
          size={30}
          onFinish={handleTimerFinish}
          digitStyle={{ backgroundColor: "#FFF" }}
          digitTxtStyle={{ color: "#1CC625" }}
          timeToShow={["M", "S"]}
          timeLabels={{ m: "MM", s: "SS" }}
          running={isTimerRunning}
          onPress={handleTimerToggle}
        />
      </View>
      <Pressable onPress={handleTimerToggle}>
        <Text style={styles.timerButton}>
          {isTimerRunning ? "Stop" : "Start"} Timer
        </Text>
      </Pressable>
      <View style={styles.countersContainer}>
        <CounterBoard
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
      <View style={styles.countersContainer}>
        <Counter
          onIncrementGS={() => incrementTeamScoreGS(1)}
          onIncrementGA={() => incrementTeamScoreGA(1)}
        />
        <Counter
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
    justifyContent: "center",
  },
  roundText: {
    fontSize: 18,
    marginBottom: 10,
  },
  teamText: {
    fontSize: 16,
    marginBottom: 5,
  },
  timerText: {
    fontSize: 20,
    marginBottom: 20,
  },
  countdownContainer: {
    marginBottom: 20,
  },
  timerButton: {
    fontSize: 16,
    marginBottom: 20,
  },
  countersContainer: {
    flexDirection: "row",
  },
});

export default ScoringPage;
