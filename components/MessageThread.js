import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Button,
} from "react-native";
import MessageBubble from "./MessageBubble";

export default function MessageThread({ route, navigation }) {
  const { message } = route.params;
  const win = Dimensions.get("window");
  const containerWidth = win.width - 32;
  console.log(message);
  return (
    <View style={styles.container}>
      <View style={{ width: containerWidth }}>
        {message.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
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
