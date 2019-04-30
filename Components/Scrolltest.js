import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View
} from "react-native";

class Scrolltest extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#ECEFF1" }}>
        <ScrollView horizontal={true} style={{ height: 50 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Scroll Me To See The Effect
          </Text>

          <Image
            source={require("../assets/tennisball.png")}
            style={{ width: 50, height: 50 }}
          />

          <Image
            source={require("../assets/tennisball.png")}
            style={{ width: 50, height: 50 }}
          />

          <Image
            source={require("../assets/tennisball.png")}
            style={{ width: 50, height: 50 }}
          />

          <Image
            source={require("../assets/tennisball.png")}
            style={{ width: 50, height: 50 }}
          />

          <Image
            source={require("../assets/tennisball.png")}
            style={{ width: 50, height: 50 }}
          />

          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Scroll View Ends Here.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default Scrolltest;

// AppRegistry.registerComponent('Myproject', () => Myproject);
