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
        marginTop: "8px",
      }}
    >
      <Pressable
        onPressIn={() =>
          navigation.navigate("MessageThread", { message: message })
        }
        style={{
          borderBottomColor: "#363A44",
          borderBottomWidth: "1px",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#363A44",
            height: "40px",
            width: "40px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "16px",
          }}
        >
          <Text style={{ fontSize: "22px", lineHeight: "22px", color: "#fff" }}>
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
                fontSize: "15px",
                lineHeight: "20px",
              }}
            >
              {message.senderFriendly}
            </Text>
            <Text
              style={{
                fontSize: "10px",
                lineHeight: "20px",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {message.messages[0].timeSent}
            </Text>
          </View>
          <Text
            style={{
              fontSize: "12px",
              lineHeight: "20px",
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
