import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Data = ({ text, table, task, index, setTable }: any) => {
  const deleteTask = () => {
    let itemslist = [...table];
    itemslist.splice(index, 1);
    setTable(itemslist);
  };
  return (
    <View style={styles.textContainer}>
      <View style={styles.textView}>
        <View style={styles.square}></View>
        <Text style={styles.textData}>{text}</Text>
        <TouchableOpacity
          key={index}
          style={styles.delete}
          onPress={() => deleteTask()}
        >
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20,
    width: "100%",
    maxHeight: 100,
    minHeight: "2%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    borderColor: "black",
    borderWidth: 1.5,
  },
  textView: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  square: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "lightblue",
    opacity: 0.8,
    marginRight: 10,
  },
  textData: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 10,
    fontSize: 18,
  },
  delete: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "red",
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignContent: "center",

    borderColor: "black",
    borderWidth: 1,
  },
  deleteText: {
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 7,
    color: "white",
  },
});
