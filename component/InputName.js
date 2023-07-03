import { StyleSheet, TextInput } from "react-native";

function InputName() {
  console.log("Siamo in InputName");
  return (
    <TextInput
      style={styles.inputText}
      placeholder="Utente"
    ></TextInput>
  );
}

export default InputName;

const styles = StyleSheet.create({
  inputText: {
    margin: 20,
    borderColor: "red",
    borderWidth: 1,
  },
});
