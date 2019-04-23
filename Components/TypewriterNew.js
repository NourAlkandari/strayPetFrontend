// import React, { PureComponent } from "react";
// import { View, Image, StyleSheet } from "react-native";
// import * as Animatable from "react-native-animatable";
// import TypeWriter from "react-native-typewriter";

// class Message extends PureComponent {
//   render() {
//     return (
//       <Animatable.View
//         useNativeDriver
//         style={styles.message}
//         animation={this.props.animation}
//       >
//         <Image style={styles.image} source={require("../assets/giphy.gif")} />

//         <View style={styles.textContainer}>
//           <TypeWriter
//             style={styles.text}
//             typing={1}
//             maxDelay={50}
//             onTyped={this.props.onTyped}
//             onTypingEnd={this.props.onTypingEnd}
//           >
//             Hello my name is noor
//           </TypeWriter>
//         </View>
//       </Animatable.View>
//     );
//   }
// }
// export default Message;
// const styles = StyleSheet.create({
//   message: {
//     marginTop: 20
//   },
//   image: {
//     alignSelf: "center"
//   },
//   textContainer: {
//     backgroundColor: "#FFF",
//     padding: 10,
//     borderRadius: 11,
//     marginLeft: 30,
//     marginRight: 30,
//     minHeight: 80
//   },
//   text: {
//     fontFamily: "Noteworthy-Bold",
//     fontSize: 18
//   }
// });
