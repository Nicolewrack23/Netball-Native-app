import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Menu from "./components/MenuScreen";
import AppPages from "./AppPages";
import GameDay from "./components/GameDay/GameDay";

export default function App() {
  const [appPages, setAppPage] = useState();

  const goToPage = (page) => {
    if (page) {
      setAppPage(page);
    } else {
      setAppPage();
    }
  };
  return (
    <View style={styles.container}>
      {(() => {
        switch (appPages) {
          case AppPages.GameDay:
            return <GameDay />;
          default:
            return <GameDay goToPage={goToPage} />;
        }
      })()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
