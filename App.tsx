import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Data } from "./components/Data";

export default function App() {
  const [task, setTask] = useState();
  const [table, setTable] = useState([]);
  // const handleChange = (text: any) => {
  //   setTask(text);
  //   console.log(text);
  // };
  const handleAdd = () => {
    Keyboard.dismiss();
    setTable([...table, task]);
    setTask(null);
  };
  // const completeTask = (index: any) => {
  //   let itemslist = [...table];
  //   itemslist.splice(index, 1);
  //   setTable(itemslist);
  // };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Todo List</Text>
        <ScrollView style={styles.dataset}>
          {table.map((item, index) => {
            return (
              <TouchableOpacity>
                <Data
                  text={item}
                  table={table}
                  task={task}
                  setTable={setTable}
                  index={index}
                  setTask={setTask}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.search}
      >
        <TextInput
          placeholder="Add your text here"
          style={styles.searchbutton}
          value={task}
          onChangeText={(text: any) => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => handleAdd()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bdc3c7",
  },
  heading: {
    padding: 30,
    marginTop: 60,
  },
  headingText: {
    color: "#273c75",
    fontSize: 50,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  dataset: {
    height: "80%",
    paddingBottom: 40,
    marginBottom: 20,
  },
  search: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchbutton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 242,
    borderColor: "black",
    borderWidth: 1.5,
    backgroundColor: "white",
    borderRadius: 40,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1.5,
  },
  addText: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
  },
});
