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

import VetButton from "./VetButton";

//Components
import BadStateButtons from "../Feeding/BadStateButtons";
import Bars from "../Bars";

//stores
import petStore from "../../Store/PetStore";

class VetCollapse extends Component {
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
              <VetButton
                itemImage={require("../../assets/vet.png")}
                vet={"Syringe"}
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
            <Bars states={petStore.pet.state.fun} name="Fun" />
          </CollapseHeader>
        </Collapse>
        <Collapse>
          <CollapseHeader
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10
            }}
          >
            <Bars states={petStore.pet.state.social} name="Social" />
          </CollapseHeader>
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
        <Collapse>
          <CollapseHeader
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10
            }}
          >
            <Bars states={petStore.pet.state.bladder} name="Bladder" />
          </CollapseHeader>
        </Collapse>
        <Collapse>
          <CollapseHeader
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10
            }}
          >
            <Bars states={petStore.pet.state.hunger} name="Hunger" />
          </CollapseHeader>
        </Collapse>
        {/* <Bars states={petStore.pet.state.social} name="Social" />
        <Bars states={petStore.pet.state.hunger} name="Hunger" />
        <Bars states={petStore.pet.state.sleep} name="Sleep" />
        <Bars states={petStore.pet.state.bladder} name="Bladder" /> */}
      </View>
    );
  }
}

export default observer(VetCollapse);
