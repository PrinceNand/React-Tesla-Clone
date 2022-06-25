import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CarItem from "./components/CarItems";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model X"}
        tagline={"$900000"}
        image={require("./assets/images/ModelX.jpeg")}
        taglineCTA={"Touchless Delivery"}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
