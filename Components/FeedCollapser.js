import React, { Component } from "react";

//react native and base
import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from "native-base";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

//Components
import StateButtons from "./StateButtons";

class FeedCollapser extends Component {
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
              {/* <CareIcon name="cutlery" type="font-awesome" /> */}
              <Icon name="food-fork-drink" type="MaterialCommunityIcons" />
            </TouchableOpacity>

            <Text style={{ fontFamily: "Noteworthy-Bold" }}>Feed me</Text>
          </CollapseHeader>
          <CollapseBody>
            <StateButtons
              itemImage={require("../assets/choco.png")}
              foodtype={"Chocolate"}
            />

            <StateButtons
              itemImage={require("../assets/meat.png")}
              foodtype={"Dog Food"}
            />

            <StateButtons
              itemImage={require("../assets/water.png")}
              foodtype={"Today's Lunch"}
            />
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}

export default FeedCollapser;
