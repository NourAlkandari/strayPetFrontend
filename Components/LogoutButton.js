import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Icon, View, Text, Right } from "native-base";
import { StyleSheet } from "react-native";
import authStore from "../Store/authStore";

import { observer } from "mobx-react";
import { bold } from "ansi-colors";

class CartButton extends Component {
  handleLogout = () => {
    const navigation = this.props.navigation;
    authStore.logout(navigation);
  };
  render() {
    return (
      <Right>
        <View style={styles.storyCounters}>
          <Icon
            type="AntDesign"
            name="logout"
            style={{ color: "Black", fontSize: 25, marginRight: 20 }}
            onPress={this.handleLogout}
          />
        </View>
        <Text style={styles.iconCounterText}>Logout</Text>
      </Right>
    );
  }
}

export default withNavigation(observer(CartButton));
const styles = StyleSheet.create({
  storyCounters: {
    flexDirection: "row"
  },

  iconCounter: {
    flex: 1,
    flexDirection: "column",
    fontSize: 21,
    color: "#bbbbbb",
    marginLeft: 70
  },

  iconCounterText: {
    color: "black",
    fontSize: 12,
    marginRight: 17
  }
});
