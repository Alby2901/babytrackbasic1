import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function ScanScreen({ onChangeScreen }) {
  const [loading, setLoading] = useState(true);
  const [scanData, setScanData] = useState("");
  const [permission, setPermission] = useState(true);

  const datoScansionato = "Dato dallo schermo 2";

  function sendDataBack(data) {
    onChangeScreen(data);
  }

  // ------------------------------------------------------------

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const { status, granted } =
        await BarCodeScanner.requestPermissionsAsync();
      console.log(`Status: ${status}, granted: ${granted}`);

      if (status === "granted") {
        console.log("access granted");
        setPermission(true);
      } else {
        setPermission(false);
      }
    } catch (error) {
      console.log(error);
      setPermission(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <View style={styles.container}>
        <Text>requesting permision...</Text>
      </View>
    );

//   if (scanData) {
//     Alert.alert("ScanData ok");
//     sendDataBack(scanData);
//     setScanData(undefined)
    // return (
    //   <View style={styles.container2}>
    //     <Text>{scanData}</Text>
    //     <Button
    //       title="ScanAgain"
    //       onPress={() => setScanData(undefined)}
    //     ></Button>
    //   </View>
    // );
//   }

  if (permission) {
    Alert.alert("Permission ok");
    return (
      <BarCodeScanner
        style={[styles.container1]}
        onBarCodeScanned={({ type, data }) => {
            Alert.alert("ScanData ok" + data);
            sendDataBack(data);
        //   try {
        //     console.log("Tipo dato: " + type);
        //     console.log("Dato: " + data);
        //     // let _data = JSON.parse(data);
        //     let _data = data;
        //     setScanData(_data);
        //   } catch (error) {
        //     console.error("Unable to parse string: ", error);
        //   }
        }}
      >
        <Text style={styles.text}>Scan the QR code.</Text>
      </BarCodeScanner>
    );
  } else {
    return <Text style={styles.textError}>Permission rejected.</Text>;
  }

  // ------------------------------------------------------------

  //   return (
  //     <View style={styles.container}>
  //        <Text>Schermo 2</Text>
  //        <Button title="test" onPress={sendDataBack}></Button>
  //        {/* <Text>{utente}</Text> */}
  //     </View>
  //   );
}

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFF00",
  },
});
