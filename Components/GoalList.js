import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={((borderTopColor = "grey"), (borderTopWidth = 1))}>
      <Pressable
        onPress={() => props.onDeleteItem(props.id)}
        style={({ pressed }) => (pressed ? styles.pressed : styles.list)}
        //When we use the arrow function and send a parameter, that parameter returns an object {"pressed": true/false}
      >
        <View>
          <Text style={{ fontSize: 20 }}>{props.item}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#EDF0DA",
    borderRadius: 10,
    height: 40,
    justifyContent: "center", //Centered vertically
    alignItems: "center", //Centered horizontall
  },
  pressed: {
    backgroundColor: "#BDC0AE",
    borderRadius: 10,
    height: 40,
    justifyContent: "center", //Centered vertically
    alignItems: "center", //Centered horizontally
  },
});
