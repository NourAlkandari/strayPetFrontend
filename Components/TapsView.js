import React, { Component } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import PetRoom from "./PetRoom";
import PetRoom2 from "./PetRoom2";
class TabsView extends Component {
  static navigationOptions = {
    // headerRight: <LogoutButton />,
    // headerLeft: <EntertainButton />,
    header: null

    // headerStyle: {
    //   backgroundColor: "transparent"
    // }
  };
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
    marginTop: 50
  }
});
