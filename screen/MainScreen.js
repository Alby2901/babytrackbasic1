import { Button, StyleSheet, Text, View } from "react-native";

function MainScreen({onChangeScreen, scanReqester, scanDataSent, scanDataReset}) {
    
  return (
    <View style={styles.container}>
      <Text>Schermo 1</Text>

      {/* <Button title="Scan1" onPress={sendReq('1')}></Button> */}
      
      <Button title="Scan1" onPress={onChangeScreen}></Button>
      <Text>Dato scansionato1: {scanDataSent} </Text>

      {/* <Button title="Scan1" onPress={sendReq1}></Button>
      <Text>Dato scansionato1: {checkRequester1(scanReqester)}</Text> */}

      {/* <Button title="Scan2" onPress={sendReq2}></Button>
      <Text>Dato scansionato1: {scanDataSent}</Text> */}

      <Button title="reset" onPress={scanDataReset}></Button>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#00FFff",
  },
});
