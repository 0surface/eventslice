import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  const handleNoAlertResponse = () => console.log("No");
  const handleYesAlertResponse = () => console.log("Yes");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My message", [
            { text: "Yes", onPress: handleYesAlertResponse },
            { text: "No", onPress: handleNoAlertResponse },
          ])
        }
      />
    </SafeAreaView>
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
