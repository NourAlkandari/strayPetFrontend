//React Libraries and native base
import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";

export default class Bars extends React.Component {
  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0
  };

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value
    });
  };

  render() {
    const barWidth = Dimensions.get("screen").width - 200;
    // const progressCustomStyles = {
    //   backgroundColor: "red",
    //   borderRadius: 0,
    //   borderColor: "orange"
    // };

    return (
      <>
        {/* <View style={styles.container}>
          <View> */}
        <Text style={styles.label}>
          {this.props.name} {this.props.states}%
        </Text>
        <ProgressBarAnimated
          width={barWidth}
          value={this.props.states}
          backgroundColorOnComplete="#6CC644"
        />
        {/* 
            <View style={styles.buttonContainer}>
              <View style={styles.buttonInner} />=
            </View>
          </View>
        </View> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: -170,
    padding: 15
  },
  buttonContainer: {
    marginTop: 15
  },
  separator: {
    marginVertical: 30,
    borderWidth: 0.5,
    borderColor: "#DCDCDC"
  },
  label: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 0
  }
});
