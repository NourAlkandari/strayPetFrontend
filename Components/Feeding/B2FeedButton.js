// React Libraries and Native Base
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Icon, View, Text, Left } from "native-base";
import { StyleSheet } from "react-native";

class B2FeedButton extends Component {
  render() {
    return (
      <Left>
        <View style={styles.storyCounters}>
          <Icon
            type="MaterialCommunityIcons"
            name="food-fork-drink"
            style={{ color: "Black", fontSize: 25, marginLeft: 10 }}
            onPress={() => this.props.navigation.navigate("PetRoom")}
          />
        </View>
        <Text style={styles.iconCounterText}>Feed</Text>
      </Left>
    );
  }
}

export default withNavigation(B2FeedButton);
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
