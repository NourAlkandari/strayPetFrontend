//react native and base
import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from "native-base";
import { observer } from "mobx-react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

import SleepButton from "./SleepButton";

//Components
import BadStateButtons from "../Feeding/BadStateButtons";
import Bars from "../Bars";

//stores
import petStore from "../../Store/PetStore";

class SleepCollapse extends Component {
  state = {
    collapsed: false //do not show the body by default
  };

  render() {
    return (
      <View>
        <Collapse
          style={{ borderBottomWidth: 1, borderTopWidth: 1 }}
          isCollapsed={this.state.collapsed}
          onToggle={isCollapsed => this.setState({ collapsed: isCollapsed })}
        >
          <CollapseHeader
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#fff"
            }}
          >
            <View style={{ width: "25%", alignItems: "center" }}>
              <SleepButton
                itemImage={require("../../assets/petbed.png")}
                sleep={"Sleep"}
              />
            </View>
            <Text style={{ fontFamily: "Noteworthy-Bold" }}>Put me to bed</Text>
          </CollapseHeader>
          {/* <CollapseBody
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: "#fff"
            }}
          >
            <Collapse style={{ flexDirection: "row" }}>
              <CollapseHeader>
                <BadStateButtons
                  itemImage={require("../../assets/petbed.png")}
                  sleep={"Sleep"}
                />
              </CollapseHeader>
            </Collapse>
          </CollapseBody> */}
        </Collapse>
        <Collapse>
          <CollapseHeader
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10
            }}
          >
            <Bars states={petStore.pet.state.sleep} name="Sleep" />
          </CollapseHeader>
        </Collapse>
      </View>
    );
  }
}

export default observer(SleepCollapse);
