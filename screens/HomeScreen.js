import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../components/Post";
import userSelector from 'react-redux';

export default function Home(props) {
  const AllPosts = userSelector(state => state.posts.posts)
  const Posts = AllPosts.map((data) => {
    <Post
      key={data.id}
      userImage={data.userImage}
      userName={data.userName}
      image={data.image}
      id = {data.id}
      onPressImage={() =>
        props.navigation.navigate("PostDetail", {
          postId: data.id,
          title: data.title,
        })
      }
    />;
  });
  return (
    <View style={styles.container}>
      <ScrollView>{Posts}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
    alignItems: "center",
  },
});
