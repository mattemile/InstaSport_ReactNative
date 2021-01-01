import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Data from "../Data/fake-data";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/helper";

export default function PostDetail(props) {
  const { postId } = props.route.params;
  const postData = Data.find((post) => post.id === postId);
  return (
    <View style={styles.container}>
      <TouchableOpacity style = {styles.userNameContainer}
        onPress={() =>
          props.navigation.navigate("Profile", {
            userId: postData.id,
          })
        }
      >
        <Text style={styles.username}>By {postData.userName}</Text>
      </TouchableOpacity>
      <Image source={{ uri: postData.image }} style={styles.image} />
      <Text  style={styles.description}>{postData.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: SCREEN_WIDTH - 20,
    height: 400,
  },
  username: {
    textDecorationLine: "underline",
    fontSize:25
  },
  userNameContainer:{
    marginTop:20,
    marginBottom:20,
    width:SCREEN_WIDTH - 20,
  },
  description:{
    width:SCREEN_WIDTH - 20,
    borderWidth : 1,
    padding : 10,
    color:'#555',
    fontSize:20
  }
});
