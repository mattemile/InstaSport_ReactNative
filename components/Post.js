import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/helper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { savePost } from "../store/actions/savedPost";
import { removePost } from "../store/actions/removePost";

const Post = (props) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const dispatch = useDispatch;
  const savedPost = useSelector((state) => state.savedPost.savedItems);
  let isSaved = null;
  if (savedPost[props.id]) {
    isSaved = savedPost[props.id].saved;
  }

  let lastTap = null;
  const onPressLike = () => {
    const now = Date.now();
    const time_delay = 400;
    if (lastTap && now - lastTap < time_delay) {
      setLike(!like);
    } else {
      lastTap = now;
    }
  };

  const onPressSave = () => {
    const postToSave = {
      userName: props.userName,
      postImage: props.image,
      id: props.id,
      saved: true,
    };
    save ? dispatch(removePost(props.id)) : dispatch(savePost(postToSave));

    setSave(!save);
  };

  const heartColor = like ? "red" : "black";
  const saveColor = isSaved ? "green" : "black";

  const imageSourceSave = isSaved
    ? require("../assets/images/full-bookmark.png")
    : require("../assets/images/bookmark.png");

  const imageSourceLike = like
    ? require("../assets/images/full-heart.png")
    : require("../assets/images/heart.png");

  return (
    <View style={StyleSheet.container}>
      <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
        <Image source={{ uri: props.userImage }} style={StyleSheet.userImage} />
        <Text style={StyleSheet.userName}>{props.userName} </Text>
      </View>
      <TouchableOpacity onPress={props.onPressImage}>
        <Image source={{ uri: props.image }} style={StyleSheet.postImage} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={onPressLike}>
          <Image
            source={imageSourceLike}
            style={{
              width: 25,
              height: 25,
              marginLeft: 10,
              marginTop: 10,
              tintColor: heartColor,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSave}>
          <Image
            source={imageSourceSave}
            style={{
              width: 25,
              height: 25,
              marginRight: 10,
              marginTop: 10,
              tintColor: saveColor,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3,
    marginVertical: 10,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: "white",
  },
  userImage: {
    width: SCREEN_WIDTH / 15,
    height: SCREEN_HEIGHT / 15,
    borderRadius: 30,
  },
  postImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 6,
  },
  userName: {
    fontSize: 25,
    marginLeft: 10,
  },
});

export default Post;
