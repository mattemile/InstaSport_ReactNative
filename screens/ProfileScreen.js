import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Data from "../data/fake-data";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/helper";

export default function Profile(props) {
  const { userId } = props.route.params;
  const userPosts = Data.filter((post) => post.userId === userId);
  const userImage = userPosts[0].userImage;
  const userName = userPosts[0].userName;
  const postImages = userPosts.map((post) => (
    <Image source={{ uri: post.image }} style={styles.image} />
  ));

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={{ uri: userImage }}
          style={styles.imageBackground}
          blurRadius={10}
        >
          <Image source={{ uri: userImage }} style={styles.userImage} />
        </ImageBackground>
      </View>
      <Text style={{ marginTop: 50, fontSize: 20, fontWeight: "600" ,alignSelf ="center"}}>
        {userName}
      </Text>
      <View style={styles.postContainer}>{postImages}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 3,
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    top: 75,
  },
  imageBackground: {
    borderBottomWidth: 10,
    width: SCREEN_WIDTH,
    height: 100,
    alignItems: "center",
  },
});
