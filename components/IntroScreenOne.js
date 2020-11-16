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

export default function IntroScreenOne({ navigation }) {
  const win = Dimensions.get("window");
  const containerWidth = win.width - 80;
  const ratio = containerWidth / 266.27;
  console.log(win);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexBasis: "60%",
        }}
      >
        <ImageBackground
          source={require("../static/img/bg-circle.svg")}
          style={{ width: "100vw", height: "90%" }}
        ></ImageBackground>
        <Image
          style={{
            width: containerWidth,
            height: 334.23 * ratio,
            flex: 1,
            resizeMode: "contain",
            position: "absolute",
            bottom: 0,
            marginLeft: "40px",
          }}
          source={require("../static/img/graphic-design-img.svg")}
        />
      </View>
      <View
        style={{
          width: containerWidth,
          textAlign: "center",
          marginTop: "50px",
          flexBasis: "40%",
        }}
      >
        <View
          style={{
            marginBottom: "18px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: "35px",
              height: "35px",
              marginRight: "8px",
            }}
            source={require("../static/img/message-icon.svg")}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: "30px",
              fontWeight: "300",
              lineHeight: "35px",
            }}
          >
            Message here
          </Text>
        </View>

        <Text
          style={{
            color: "#fff",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: containerWidth,
            justifyContent: "space-between",
            marginTop: "auto",
            marginBottom: "60px",
          }}
        >
          <View />
          <Button
            title="Skip"
            onPress={() => navigation.navigate("Messages")}
            color="rgba(0, 0, 0, 0)"
            accessibilityLabel="Skip tutorial steps and go straight to your messages"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363A44",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
  },
});
