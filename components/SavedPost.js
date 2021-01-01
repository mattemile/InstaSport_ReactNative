import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/helper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { removePost } from "../store/actions/removePost";

export default function SavedPost(props) {
  const imageSourceSave = props.save
    ? require("../assets/images/full-bookmark.png")
    : require("../assets/images/bookmark.png");

  return (
    <View style={styles.container}>
      <Image source={{ uri: props.image }} style={styles.postImage} />
      <Text style={styles.userName}>{props.userName}</Text>
      <TouchableOpacity onPress={props.onRemovePost}>
        <Ionicons name="md-trash" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aaa",
    width: SCREEN_WIDTH - 20,
    height: 130,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  postImage: {
    height: 80,
    width: SCREEN_WIDTH / 3,
  },
  saveImage: {
    width: 25,
    height: 25,
  },
  userName: {
    fontSize: 20,
    fontWeight: "500",
  },
});
