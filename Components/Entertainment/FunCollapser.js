//react native and base
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "native-base";
import { observer } from "mobx-react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

//Components
import FunStateButtons from "./FunStateButtons";
import BadFunButtons from "./BadFunButtons";
import Bars from "../Bars";

//stores
import petStore from "../../Store/PetStore";

class FunCollapser extends Component {
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
            <Text style={{ fontFamily: "Noteworthy-Bold" }}>Play with me</Text>
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
                <BadFunButtons
                  itemImage={require("../../assets/toy1.png")}
                  Entertaintype={"Ignore"}
                />
              </CollapseHeader>
            </Collapse>
            <Collapse style={{ flexDirection: "row" }}>
              <CollapseHeader>
                <FunStateButtons
                  itemImage={require("../../assets/toy2.png")}
                  Entertaintype={"Walk Pet"}
                />
              </CollapseHeader>
            </Collapse>
            <Collapse style={{ flexDirection: "row" }}>
              <CollapseHeader>
                <FunStateButtons
                  itemImage={require("../../assets/toy3.png")}
                  Entertaintype={"Go to Petstore"}
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
            <Bars states={petStore.pet.state.fun} name="Fun" />
          </CollapseHeader>
        </Collapse>
      </View>
    );
  }
}

export default observer(FunCollapser);
