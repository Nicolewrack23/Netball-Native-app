import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Counter from "./Counter";
import CounterBoard from "./CounterBoard";
import { storeData } from "../Utils/LocalStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ScoringPage = ({ route, navigation }) => {
  const { newGameData } = route.params;
  const totalRounds = parseInt(newGameData.Rounds);
  const [currentRound, setCurrentRound] = useState(1);
  const [team1ScoreGS, setTeam1ScoreGS] = useState(0);
  const [team1ScoreGA, setTeam1ScoreGA] = useState(0);
  const [team2ScoreGS, setTeam2ScoreGS] = useState(0);
  const [team2ScoreGA, setTeam2ScoreGA] = useState(0);
  const [roundData, setRoundData] = useState(newGameData);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isGSOrGATeam1, setIsGSOrGATeam1] = useState();
  const [isGSOrGATeam2, setIsGSOrGATeam2] = useState();

  const handleNextRoundOrFinish = () => {
    // Store data for the current round
    const roundDataForCurrentRound = {
      team1Score,
      team2Score,
      team1ScoreGS,
      team1ScoreGA,
      team2ScoreGS,
      team2ScoreGA,
    };

    setRoundData((prevData) => ({
      ...prevData,
      [currentRound]: roundDataForCurrentRound,
    }));

    setTeam1ScoreGS(0);
    setTeam1ScoreGA(0);
    setTeam2ScoreGS(0);
    setTeam2ScoreGA(0);

    setCurrentRound((prevRound) => prevRound + 1);
  };

  const handleFinish = async () => {
    await handleTransfer();
    console.log("handle finish");
  };
  useEffect(() => {
    if (currentRound < totalRounds) {
      // Load data for the current round
      const dataForRound = roundData[currentRound];
      if (dataForRound) {
        setTeam1ScoreGS(dataForRound.team1ScoreGS);
        setTeam1ScoreGA(dataForRound.team1ScoreGA);
        setTeam2ScoreGS(dataForRound.team2ScoreGS);
        setTeam2ScoreGA(dataForRound.team2ScoreGA);
      } else {
        // If data for the round is not available, reset scores
        setTeam1ScoreGS(0);
        setTeam1ScoreGA(0);
        setTeam2ScoreGS(0);
        setTeam2ScoreGA(0);
      }
    }
  }, [currentRound, totalRounds, roundData]);

  const handleTransfer = async () => {
    // If it's the last round, set the game as finished
    if (currentRound === totalRounds) {
      setIsGameFinished(true);
      console.log("finished");
    }
    const roundDataForLastRound = {
      team1Score,
      team2Score,
      team1ScoreGS,
      team1ScoreGA,
      team2ScoreGS,
      team2ScoreGA,
    };

    const updatedRoundData = {
      ...roundData,
      [currentRound]: roundDataForLastRound,
    };

    await storeData(updatedRoundData);
    navigation.navigate("ResultPage", { updatedRoundData: updatedRoundData });
  };

  const deleteData = async () => {
    await AsyncStorage.clear();
    alert("All data in local storage has been deleted.");
  };
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const incrementTeamScoreGS = (team) => {
    if (team === 1) {
      setIsGSOrGATeam1(true);
      setTeam1ScoreGS(team1ScoreGS + 1);
      setTeam1Score(team1Score + 1);
    } else if (team === 2) {
      setIsGSOrGATeam2(true);
      setTeam2ScoreGS(team2ScoreGS + 1);
      setTeam2Score(team2Score + 1);
    }
  };

  const incrementTeamScoreGA = (team) => {
    if (team === 1) {
      setIsGSOrGATeam1(false);
      setTeam1ScoreGA(team1ScoreGA + 1);
      setTeam1Score(team1Score + 1);
    } else if (team === 2) {
      setIsGSOrGATeam2(false);
      setTeam2ScoreGA(team2ScoreGA + 1);
      setTeam2Score(team2Score + 1);
    }
  };

  const decrementTeamScore = (team) => {
    if (team === 1) {
      if (team1Score > 0) {
        setTeam1Score(team1Score - 1);
        if (isGSOrGATeam1) {
          setTeam1ScoreGS(team1ScoreGS - 1);
        } else {
          setTeam1ScoreGA(team1ScoreGA - 1);
        }
      } else {
        return;
      }
    } else if (team === 2) {
      if (team2Score > 0) {
        setTeam2Score(team2Score - 1);
        if (isGSOrGATeam2) {
          setTeam2ScoreGS(team2ScoreGS - 1);
        } else {
          setTeam2ScoreGA(team2ScoreGA - 1);
        }
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
      {currentRound < totalRounds ? (
        <Pressable
          disabled={isGameFinished}
          onPress={handleNextRoundOrFinish}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </Pressable>
      ) : (
        <>
          <Pressable
            disabled={isGameFinished}
            onPress={handleFinish}
            style={styles.finishButton}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </Pressable>
          <Pressable onPress={deleteData}>
            <Text style={styles.finishButtonText}>delete</Text>
          </Pressable>
        </>
      )}

      <View style={styles.counterAndBoardContainer}>
        <View style={styles.counterBoardContainer}>
          <CounterBoard
            label={"team 1"}
            onDecrement={() => decrementTeamScore(1)}
            value={team1Score}
            isGameFinished={isGameFinished}
          />
          <Text style={styles.counterBoardText}>VS</Text>
          <CounterBoard
            label={"team 2"}
            onDecrement={() => decrementTeamScore(2)}
            value={team2Score}
            isGameFinished={isGameFinished}
          />
        </View>
        <View style={styles.counterContainer}>
          <Counter
            label={"team 1"}
            value={team1Score}
            onIncrementGS={() => incrementTeamScoreGS(1)}
            onIncrementGA={() => incrementTeamScoreGA(1)}
            isGameFinished={isGameFinished}
          />
          <Counter
            value={team2Score}
            label={"team 2"}
            onIncrementGS={() => incrementTeamScoreGS(2)}
            onIncrementGA={() => incrementTeamScoreGA(2)}
            isGameFinished={isGameFinished}
          />
        </View>
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
  counterAndBoardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  roundText: {
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
  teamText: {
    fontSize: 16,
  },
  alignTeamItems: {
    flexDirection: "row",
    columnGap: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: "#FFB703",
    borderBottomWidth: 2,
  },
  counterContainer: {
    flexDirection: "row",
    height: "33%",
  },
  counterBoardContainer: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderRadius: 20,
  },
  counterBoardText: {
    fontSize: 25,
  },
});

export default ScoringPage;
