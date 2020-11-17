import { StatusBar } from "expo-status-bar";
import React from "react";
import messagesObj from "../static/data/messages.js";
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
  const [messages, setMessages] = React.useState(messagesObj);
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
        <Text style={{ marginBottom: 8 }}>All messages</Text>

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
    marginTop: 20,
  },
});
