import React, { Component } from "react";
import { TouchableOpacity, Modal, View, Text, Dimensions } from "react-native";
// import ProgressBarAnimated from "react-native-progress-bar-animated";
import { LinearGradient } from "expo";

import style from "./styles";

import CareIcon from "../icon";

class Bars extends Component {
  render() {
    // const barWidth = Dimensions.get("screen").width / 2 - 30;
    // const progressCustomStyle = {
    //   backgroundColor: colors.white,
    //   borderRadius: 10,
    //   borderColor: colors.white
    // };

    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}
        />

        {/* Progress bar container1 starts */}
        {/* <View style={style.container}> */}

        {/* Row 2 */}
        {/* <View style={style.row}>
            <View style={style.column}>
              <Text style={style.actionLabel}>Fitness</Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.fitness}
              />
            </View>
            <View style={style.column}>
              <Text style={style.actionLabel}>Energy</Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.energy}
              />
            </View>
          </View>

         
        </View> */}

        {/* Icon container3 starts */}
        <View style={style.container3}>
          {/* Row 1 */}
          <View style={style.iconRow}>
            <CareIcon
              name="cutlery"
              type="font-awesome"
              onPress={() => this.props.onPress("feed")}
            />
            <CareIcon
              name="soccer-ball-o"
              type="font-awesome"
              onPress={() => this.props.onPress("play")}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Bars;
const style = StyleSheet.create({
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
  }
});
