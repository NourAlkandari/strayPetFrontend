// React Libraries and Native Base
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Icon, View, Text, Left } from "native-base";
import { StyleSheet } from "react-native";

class EntertainButton extends Component {
  render() {
    return (
      <Left>
        <View style={styles.storyCounters}>
          <Icon
            type="FontAwesome"
            name="soccer-ball-o"
            style={{ color: "Black", fontSize: 25, marginLeft: 10 }}
            onPress={() => this.props.navigation.navigate("PetRoom2")}
          />
        </View>
        <Text style={styles.iconCounterText}>Play</Text>
      </Left>
    );
  }
}

export default withNavigation(EntertainButton);
const styles = StyleSheet.create({
  storyCounters: {
    flexDirection: "row"
  },

  iconCounterText: {
    color: "black",
    fontSize: 12,
    marginLeft: 10
  }
});
