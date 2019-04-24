//react native and base
import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from "native-base";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

//Components
import StateButtons from "./StateButtons";

class FunCollapser extends Component {
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
            <StateButtons
              itemImage={require("../assets/toy3.png")}
              entertainmenttype={"Walk Pet"}
            />
            <StateButtons
              itemImage={require("../assets/toy1.png")}
              entertainmenttype={"Ignore"}
            />
            <StateButtons
              itemImage={require("../assets/toy2.png")}
              entertainmenttype={"Go to Petstore"}
            />
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}

export default FunCollapser;
