import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SavedPost from "../components/SavedPost";
import { useDispatch, useSelector } from "react-redux";

export default function SavedPostScreen() {
  const dispatch = useDispatch();

  const savedPostList = useSelector((state) => {
    const postArray = [];
    for (id in state.savedPost.savedItems) {
      postArray.push(state.savedPost.savedItems[id]);
    }
    return postArray;
  });
  const myPosts = savedPostList.map((post) => (
    <SavedPost
      userName={post.userName}
      image={post.postImage}
      onRemovePost={() => dispatch(removePost(props.id))}
      key={post.id}
    />
  ));
  return <View style={styles.container}>{myPosts}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
