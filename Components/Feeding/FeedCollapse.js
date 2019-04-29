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

//Components
import StateButtons from "./StateButtons";
import BadStateButtons from "./BadStateButtons";
import Bars from "../Bars";

//stores
import petStore from "../../Store/PetStore";

class FeedCollapse extends Component {
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
              padding: 10
            }}
          >
            <View style={{ width: "25%", alignItems: "center" }}>
              <Icon name="food-fork-drink" type="MaterialCommunityIcons" />
            </View>
            <Text style={{ fontFamily: "Noteworthy-Bold" }}>
              Feed me something healthy
            </Text>
          </CollapseHeader>
          <CollapseBody
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <Collapse style={{ flexDirection: "row" }}>
              <CollapseHeader>
                <BadStateButtons
                  itemImage={require("../../assets/chocolate.png")}
                  foodtype={"Chocolate"}
                />
              </CollapseHeader>
              {/* <CollapseBody
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10
                }}
              >
                <Text>+1 310 346 0018</Text>
              </CollapseBody> */}
            </Collapse>
            <Collapse style={{ flexDirection: "row" }}>
              <CollapseHeader>
                <StateButtons
                  itemImage={require("../../assets/dogfood.png")}
                  foodtype={"Dog Food"}
                />
              </CollapseHeader>
            </Collapse>
            <Collapse style={{ flexDirection: "row" }}>
              <CollapseHeader>
                <StateButtons
                  itemImage={require("../../assets/todayslunch.png")}
                  foodtype={"Today's Lunch"}
                />
              </CollapseHeader>
            </Collapse>
          </CollapseBody>
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
      </View>
    );
  }
}

export default observer(FeedCollapse);
