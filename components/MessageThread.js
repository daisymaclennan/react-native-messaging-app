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
  TextInput,
} from "react-native";
import MessageBubble from "./MessageBubble";

export default function MessageThread({ route, navigation }) {
  const [value, onChangeText] = React.useState("Write a message here");
  const { message } = route.params;
  const win = Dimensions.get("window");
  const containerWidth = win.width - 32;
  console.log(message);
  return (
    <View style={styles.container}>
      <View style={{ width: containerWidth, marginBottom: 100 }}>
        {message.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </View>
      <TextInput
        style={{
          backgroundColor: "#fff",
          width: "100%",
          color: "rgba(0, 0, 0, 0.87)",
          paddingVertical: 24,
          paddingHorizontal: 32,
          position: "absolute",
          bottom: 0,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
