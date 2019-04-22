// import React, { Component } from "react";
// import {
//   TouchableOpacity,
//   Modal,
//   View,
//   Text,
//   Dimensions,
//   StyleSheet
// } from "react-native";
// // import ProgressBarAnimated from "react-native-progress-bar-animated";
// // import { LinearGradient } from "expo";
// import FoodButtons from "./FoodButtons";
// import CareIcon from "./icon";

// class Bars extends Component {
//   state = {
//     foodButtons: false,
//     playButtons: false
//   };

//   handleFeed = () => {
//     const newValue = !this.state.foodButtons;
//     this.setState({ foodButtons: newValue });
//   };
//   handlePlay = () => {
//     const newValue = !this.state.playButtons;
//     this.setState({ playButtons: newValue });
//   };
//   foodView = () => {
//     if (this.state.foodButtons) {
//       return (
//         <View style={styles.overlayContainer}>
//           <View style={styles.menuContainer}>
//             <FoodButtons
//               itemImage={require("../assets/choco.png")}
//               foodtype={"Chocolate"}
//             />
//             <FoodButtons itemImage={require("../assets/meat.png")} />
//             <FoodButtons itemImage={require("../assets/water.png")} />
//           </View>
//         </View>
//       );
//     } else {
//       return (
//         <TouchableOpacity onPress={this.handleFeed}>
//           <CareIcon name="cutlery" type="font-awesome" />
//         </TouchableOpacity>
//       );
//     }
//   };
//   playView = () => {
//     if (this.state.playButtons) {
//       return (
//         <View style={styles.overlayContainer}>
//           <View style={styles.menuContainer}>
//             <FoodButtons itemImage={require("../assets/toy3.png")} />
//             <FoodButtons itemImage={require("../assets/toy1.png")} />
//             <FoodButtons itemImage={require("../assets/toy2.png")} />
//           </View>
//         </View>
//       );
//     } else {
//       return (
//         <TouchableOpacity onPress={this.handlePlay}>
//           <CareIcon name="soccer-ball-o" type="font-awesome" />
//         </TouchableOpacity>
//       );
//     }
//   };
//   onPressPlay = () => {
//     return (
//       <View style={styles.overlayContainer}>
//         <View style={styles.menuContainer} />
//       </View>
//     );
//   };
//   render() {
//     // const barWidth = Dimensions.get("screen").width / 2 - 30;
//     // const progressCustomStyle = {
//     //   backgroundColor: colors.white,
//     //   borderRadius: 10,
//     //   borderColor: colors.white
//     // };

//     return (
//       <>
//         {this.foodView()}
//         {this.playView()}
//       </>
//     );
//   }
// }

// export default Bars;
// const styles = StyleSheet.create({
//   container3: {
//     flex: 3,
//     flexDirection: "column",
//     padding: 5,
//     paddingTop: 20
//   },
//   iconRow: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     padding: 20
//   },
//   overlayContainer: {
//     flex: 1
//     // backgroundColor: "rgba(255, 234, 234, 0.4)"
//   },

//   menuContainer: {
//     height: "50%",

//     flexDirection: "row",
//     flexWrap: "wrap"
//   }
// });
