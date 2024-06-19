import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./Components/GoalList";
import GoalInput from "./Components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setMoadalIsVisible] = useState(false);

  function GoalHandler() {
    setMoadalIsVisible((currentValue) => !currentValue);
  }

  function addInput(element) {
    setGoalList((preValue) => {
      return [
        ...preValue,
        {
          text: element,
          key: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
        },
      ];
    });
    GoalHandler();
  }

  function deleteHandler(id) {
    setGoalList((preValue) => preValue.filter((value) => value.key !== id));
  }
  return (
    <>
      <StatusBar style="inverted" />
      <View style={styles.appContainer}>
        <View style={styles.addButtonStyle}>
          <Button title="Add New Goal" color="black" onPress={GoalHandler} />
        </View>
        <View style={styles.line}></View>
        <GoalInput
          addInput={addInput}
          visible={modalIsVisible}
          modalHandler={GoalHandler}
        />
        <View>
          <FlatList
            style={styles.listContainer}
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  item={itemData.item.text}
                  onDeleteItem={deleteHandler}
                  id={itemData.item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#AA4465",
    paddingTop: "20%",
    padding: 16,
  },
  listContainer: {
    margin: 10,
    marginTop: "10%",
  },
  addButtonStyle: {
    backgroundColor: "#EDF0DA",
    borderRadius: 10,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 30,
  },
});
