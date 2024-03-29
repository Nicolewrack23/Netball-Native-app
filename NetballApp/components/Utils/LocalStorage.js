import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (game) => {
  try {
    let storedGames = await getData();

    if (!storedGames) {
      storedGames = [];
    }
    const updatingGames = [...storedGames, game];

    const jsonValue = JSON.stringify(updatingGames);
    await AsyncStorage.setItem("@stored_games", jsonValue);
    console.log("storeData: ", jsonValue);
  } catch (error) {
    console.log("Error storing data:", error);
  }
};
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@stored_games");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log("Error getting data:", error);
  }
};

export const deleteData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};
