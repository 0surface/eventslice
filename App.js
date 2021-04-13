import React from "react";
import { Dimensions, StyleSheet, SafeAreaView, Button, StatusBar, Platform, View } from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%", //this is % value
          height: 70, // this is a DIP
        }}
        //Density-Independent Pixles : Physical pixles = DIPS x scale factor
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
