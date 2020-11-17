import React from "react";
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

const MessageItem = ({ navigation, message }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Pressable
        onPressIn={() =>
          navigation.navigate("MessageThread", { message: message })
        }
        style={{
          borderBottomColor: "rgba(0, 0, 0, 0.65)",
          borderBottomWidth: 1,
          padding: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#363A44",
            height: 40,
            width: 40,
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 16,
          }}
        >
          <Text style={{ fontSize: 22, lineHeight: 22, color: "#fff" }}>
            {message.senderFriendly.substring(0, 1)}
          </Text>
        </View>
        <View style={{ flexBasis: "calc(100% - 60px)" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                lineHeight: 20,
              }}
            >
              {message.senderFriendly}
            </Text>
            <Text
              style={{
                fontSize: 10,
                lineHeight: 20,
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {message.messages[0].timeSent}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 20,
              color: "rgba(0, 0, 0, 0.65)",
            }}
          >
            {message.messages[0].content.substring(0, 40)}...
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MessageItem;
