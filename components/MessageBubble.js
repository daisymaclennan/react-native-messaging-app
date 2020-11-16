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

const MessageBubble = ({ message }) => {
  var bubbleStyle = message.senderMe ? styles.meSend : styles.theySend;
  return (
    <View>
      <Text
        style={{
          fontSize: "11px",
          lineHeight: "16px",
          color: "rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          marginBottom: "10px",
          marginTop: "16px",
        }}
      >
        {message.timeSent}
      </Text>
      <Text style={bubbleStyle}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  meSend: {
    backgroundColor: "#363A44",
    color: "#FFF",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "80%",
    borderRadius: "20px",
  },
  theySend: {
    backgroundColor: "#FFF",
    color: "#000",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "80%",
    marginLeft: "auto",
    borderRadius: "20px",
  },
});
export default MessageBubble;
