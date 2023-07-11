import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MainScreen from "./screen/MainScreen";
import ScanScreen from "./screen/ScanScreen";
import { ImageBackground } from "react-native";

export default function App() {
  const [scanning, setScanning] = useState(false);
  const [scanData, setScanData] = useState("12345");
  const [scanReq, setScanReq] = useState("12345");

  function changeScreen(dataBack) {
    console.log("Dato ric Gen => " + dataBack);

    if (scanning) {
      console.log("Dato ric dalla scan => " + dataBack);
      setScanData(dataBack);
      setScanning(false);
    } else {
      console.log("Dato ric dalla rich => " + dataBack);
      setScanReq(dataBack);
      setScanning(true);
    }
  }

  function scanDataRst() {
    setScanData("56789");
  }

  let screen = (
    <MainScreen
      style={styles.screen}
      onChangeScreen={changeScreen}
      scanReqester={scanReq}
      scanDataSent={scanData}
      scanDataReset={scanDataRst}
    />
  );

  if (scanning) {
    screen = <ScanScreen style={styles.screen} onChangeScreen={changeScreen} />;
  }

  // console.log("Scanning = " + scanning);
  // console.log("Screen = " + screen);

  return (
    <ImageBackground
      source={require("./assets/background.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      {screen}
    </ImageBackground>

    // <View style={styles.vista1}>
    //   <View style={styles.blocco1}>
    //     <Text>1</Text>
    //   </View>
    // </View>

    // <View>
    //   {/* <ScanScreen></ScanScreen> */}
    //   <MainScreen></MainScreen>
    //   {/* {screen} */}
    // </View>

    // <MainScreen />
    // <ScanScreen />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#ff0000",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  // vista1: {
  //   backgroundColor: "#00ff00",
  //   padding: 50,
  //   flexDirection: "row",
  //   width: "100%",
  //   height: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // blocco1: {
  //   // flex: 3,
  //   height: 200,
  //   width: 200,
  //   backgroundColor: "red",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
