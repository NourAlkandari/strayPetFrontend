import React, { Component } from "react";

//react native and base
import { View, TouchableOpacity, StyleSheet, Button, Text } from "react-native";
import { Icon } from "native-base";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

//Components
import FoodButtons from "./FoodButtons";
import { bold } from "ansi-colors";

class Collapser extends Component {
  state = {
    collapsed: false //do not show the body by default
  };
  render() {
    return (
      <View>
        <Collapse
          isCollapsed={this.state.collapsed}
          onToggle={isCollapsed => this.setState({ collapsed: isCollapsed })}
        >
          <CollapseHeader
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#E6E6E6"
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.setState({ collapsed: !this.state.collapsed })
              }
            >
              {/* <CareIcon name="soccer-ball-o" type="font-awesome" /> */}
              <Icon name="soccer-ball-o" type="FontAwesome" />
            </TouchableOpacity>

            <Text style={{ fontFamily: "Noteworthy-Bold" }}>Play with me</Text>
          </CollapseHeader>
          <CollapseBody>
            <FoodButtons itemImage={require("../assets/toy3.png")} />
            <FoodButtons itemImage={require("../assets/toy1.png")} />
            <FoodButtons itemImage={require("../assets/toy2.png")} />
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}

export default Collapser;
const styles = StyleSheet.create({
  container3: {
    flex: 3,
    flexDirection: "column",
    padding: 5,
    paddingTop: 20
  },
  iconRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20
  },
  overlayContainer: {
    flex: 1
    // backgroundColor: "rgba(255, 234, 234, 0.4)"
  },

  menuContainer: {
    height: "50%",

    flexDirection: "row",
    flexWrap: "wrap"
  }
});
