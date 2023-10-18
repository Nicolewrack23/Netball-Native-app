import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Menu from "./components/MenuScreen";
import GameDay from "./components/GameDay/GameDay";
import Scoring from "./components/Scoring/Scoring";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={Menu}
          options={{
            title: "Netball",
            headerTitleStyle: {
              fontWeight: "normal",
            },
          }}
        /> */}
        <Stack.Screen
          name="GameDay"
          component={GameDay}
          options={{
            title: "Game Plan",
            headerTitleStyle: {
              fontWeight: "normal",
            },
          }}
        />
        <Stack.Screen
          name="ScoringPage"
          component={Scoring}
          options={{
            title: "Scoring Page",
            headerTitleStyle: {
              fontWeight: "normal",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
