import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [input, setInput] = useState("");
  function handleInput(enteredText) {
    setInput(enteredText);
  }

  function addGoalHandler() {
    props.addInput(input);
    setInput("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../Images/background.png")}
        />
        <TextInput
          placeholder="Insert text here"
          style={styles.inputField}
          onChangeText={handleInput}
          value={input}
        />
        <View style={styles.ButtonsContainer}>
          <View style={styles.Button}>
            <Button
              color="black"
              title="Add Item"
              onPress={addGoalHandler}
            ></Button>
          </View>
          <View style={styles.Button}>
            <Button
              color="black"
              title="Cancel"
              onPress={props.modalHandler}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center", //Centered horizontall
    justifyContent: "center",
    backgroundColor: "#AA4465",
    flex: 1,
  },
  inputField: {
    borderRadius: 10,
    backgroundColor: "white",
    width: "70%",
    height: "4%",
    textAlign: "center",
  },
  ButtonsContainer: {
    flexDirection: "row",
    marginTop: "3%",
  },
  Button: {
    width: "40%",
    marginHorizontal: 8,
    backgroundColor: "#EDF0DA",
    borderRadius: 10,
  },
  image: { width: 100, height: 100, margin: 30 },
});
