import { View, Text } from "react-native";
const ScoringPage = ({ route, navigate }) => {
  const { newGameData, teamName } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>itemId: {newGameData.team1}</Text>
    </View>
  );
};

export default ScoringPage;
