// ----------------------------------------------------------------
// testy modal screen similar to pop up
// ----------------------------------------------------------------

import * as React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ModalScreen from "./screen/ModalScreen1";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        title="Open Modal"
        onPress={() => {
          navigation.navigate("MyModal", {
            testo: "Questo è il testo",
            testobottone: "cliccami!",
          });
        }}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Details" component={DetailsScreen} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: "modal",
            headerShown: false,
          }}
        >
          <RootStack.Screen
            name="MyModal"
            component={ModalScreen}
            // Options={{ headerShown: false }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

// export default function App() {

// -----------------------------------------------------------------


// ----------------------------------------------------------------
// Test React Native modal screen similar to pop up
// ----------------------------------------------------------------

// import { useState } from "react";
// import { StyleSheet, View, Text, Modal, Pressable, Alert } from "react-native";
// import MainScreen from "./screen/MainScreen";
// import ScanScreen from "./screen/ScanScreen";
// import { ImageBackground } from "react-native";
// import CountdownTimer from "./CountdownTimer";
// import CountdownTimerAuto from "./CountdownTimerAuto";

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     // test modal

//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // -----test Modal ------------
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//     backgroundColor: 'red'
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//     margin: 5,
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   // --------------------------------------
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // backgroundColor: "#ff0000",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "stretch",
//   },
//   // vista1: {
//   //   backgroundColor: "#00ff00",
//   //   padding: 50,
//   //   flexDirection: "row",
//   //   width: "100%",
//   //   height: "100%",
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   // },
//   // blocco1: {
//   //   // flex: 3,
//   //   height: 200,
//   //   width: 200,
//   //   backgroundColor: "red",
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   // },
//   rootScreen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "stretch",
//   },
//   backgroundImage: {
//     opacity: 0.15,
//   },
// });

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

//   // test modal
//   const [modalVisible, setModalVisible] = useState(false);

//   // const [scanning, setScanning] = useState(false);
//   // const [scanData, setScanData] = useState("12345");
//   // const [scanReq, setScanReq] = useState("12345");

//   // function changeScreen(dataBack) {
//   //   console.log("Dato ric Gen => " + dataBack);

//   //   if (scanning) {
//   //     console.log("Dato ric dalla scan => " + dataBack);
//   //     setScanData(dataBack);
//   //     setScanning(false);
//   //   } else {
//   //     console.log("Dato ric dalla rich => " + dataBack);
//   //     setScanReq(dataBack);
//   //     setScanning(true);
//   //   }
//   // }

//   // function scanDataRst() {
//   //   setScanData("56789");
//   // }

//   // let screen = (
//   //   <MainScreen
//   //     style={styles.screen}
//   //     onChangeScreen={changeScreen}
//   //     scanReqester={scanReq}
//   //     scanDataSent={scanData}
//   //     scanDataReset={scanDataRst}
//   //   />
//   // );

//   // if (scanning) {
//   //   screen = <ScanScreen style={styles.screen} onChangeScreen={changeScreen} />;
//   // }

//   // // console.log("Scanning = " + scanning);
//   // // console.log("Screen = " + screen);

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

//     // test timer
//     // <View style={styles.container}>
//     //   {/* <CountdownTimer /> */}
//     //   <CountdownTimerAuto />
//     // </View>

//     // <ImageBackground
//     //   source={require("./assets/background.png")}
//     //   resizeMode="cover"
//     //   style={styles.rootScreen}
//     //   imageStyle={styles.backgroundImage}
//     // >
//     //   {screen}
//     // </ImageBackground>

//     // <View style={styles.vista1}>
//     //   <View style={styles.blocco1}>
//     //     <Text>1</Text>
//     //   </View>
//     // </View>

//     // <View>
//     //   {/* <ScanScreen></ScanScreen> */}
//     //   <MainScreen></MainScreen>
//     //   {/* {screen} */}
//     // </View>

//     // <MainScreen />
//     // <ScanScreen />
//   );
// }
