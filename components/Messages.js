import { StatusBar } from "expo-status-bar";
import React from "react";
import messages from "../static/data/messages.js";
import MessageItem from "./MessageItem";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Button,
  Pressable,
} from "react-native";

export default function IntroScreenOne({ navigation }) {
  const win = Dimensions.get("window");
  const containerWidth = win.width - 32;
  console.log(messages);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: containerWidth,
        }}
      >
        <Text>All messages</Text>

        {messages.map((message) => (
          <MessageItem
            navigation={navigation}
            message={message}
            key={message.id}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    marginTop: "20px",
  },
});
