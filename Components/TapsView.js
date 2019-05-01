//React Libraries
import React, { Component } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Container, Tab, Tabs, ScrollableTab } from "native-base";

//Components
import PetRoom from "./PetRoom";
import PetRoom2 from "./PetRoom2";
import LogoutButton from "./LogoutButton";
import MuteButton from "./MuteButton";

//stores
import petStore from "../Store/PetStore";

class TabsView extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: <MuteButton />,
    // header: null
    headerTransparent: true,
    headerStyle: {
      backgroundColor: "transparent",
      marginTop: -40
    }
  };
  componentDidMount() {
    petStore.fetch();
  }
  render() {
    return (
      <Container style={stylee.m}>
        <StatusBar hidden />
        <Tabs>
          <Tab heading="Feed">
            <PetRoom />
          </Tab>
          <Tab heading="Play">
            <PetRoom2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default TabsView;
const stylee = StyleSheet.create({
  m: {
    marginTop: 50,
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
