import { useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import MainScreen from "./screen/MainScreen";
import ScanScreen from "./screen/ScanScreen";
import { ImageBackground } from "react-native";
import CountdownTimer from "./CountdownTimer";
import CountdownTimerAuto from "./CountdownTimerAuto"

export default function App() {

  // test modal 
  const [modalVisible, setModalVisible] = useState(false);

  // const [scanning, setScanning] = useState(false);
  // const [scanData, setScanData] = useState("12345");
  // const [scanReq, setScanReq] = useState("12345");

  // function changeScreen(dataBack) {
  //   console.log("Dato ric Gen => " + dataBack);

  //   if (scanning) {
  //     console.log("Dato ric dalla scan => " + dataBack);
  //     setScanData(dataBack);
  //     setScanning(false);
  //   } else {
  //     console.log("Dato ric dalla rich => " + dataBack);
  //     setScanReq(dataBack);
  //     setScanning(true);
  //   }
  // }

  // function scanDataRst() {
  //   setScanData("56789");
  // }

  // let screen = (
  //   <MainScreen
  //     style={styles.screen}
  //     onChangeScreen={changeScreen}
  //     scanReqester={scanReq}
  //     scanDataSent={scanData}
  //     scanDataReset={scanDataRst}
  //   />
  // );

  // if (scanning) {
  //   screen = <ScanScreen style={styles.screen} onChangeScreen={changeScreen} />;
  // }

  // // console.log("Scanning = " + scanning);
  // // console.log("Screen = " + screen);

  return (

    // test modal

    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.textStyle}>Show Modal</Text>
    </Pressable>
  </View>




    // test timer
    // <View style={styles.container}>
    //   {/* <CountdownTimer /> */}
    //   <CountdownTimerAuto />
    // </View>



    // <ImageBackground
    //   source={require("./assets/background.png")}
    //   resizeMode="cover"
    //   style={styles.rootScreen}
    //   imageStyle={styles.backgroundImage}
    // >
    //   {screen}
    // </ImageBackground>

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
// -----test Modal ------------
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
},
buttonOpen: {
  backgroundColor: '#F194FF',
},
buttonClose: {
  backgroundColor: '#2196F3',
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
},
// --------------------------------------
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // backgroundColor: "#ff0000",
    // alignItems: "center",
    // justifyContent: "center",
  },
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
