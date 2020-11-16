import * as React from "react";
import IntroScreenOne from "./components/IntroScreenOne";
import Messages from "./components/Messages";
import MessageThread from "./components/MessageThread";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroductionOne"
          component={IntroScreenOne}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#363A44",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen
          name="IntroductionTwo"
          component={IntroScreenOne}
          options={{
            title: "Welcome to messenger",
            headerStyle: {
              backgroundColor: "#363A44",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{
            title: "Messages",
            headerStyle: {
              backgroundColor: "#363A44",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="MessageThread"
          component={MessageThread}
          options={({ route }) => ({
            title: route.params.message.senderFriendly,
            headerStyle: {
              backgroundColor: "#363A44",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
