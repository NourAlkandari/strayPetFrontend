// React Libraries and Native Base
import React, { Component } from "react";
import { observer } from "mobx-react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { Form, Item, Input, Text, View, Icon } from "native-base";

// Store
import authStore from "../Store/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
    // email: ""
  };
  static navigationOptions = {
    // title: "Login",
    header: null
  };

  // ChangeTextUsername = (value)=>{
  //   this.setState({ username: value })
  //   if (this.state.username != ""){
  //     alert ("Success")
  //   }else{
  //     alert("Please Enter Valid password")
  //   }
  // }
  // ChangeTextPassword = (value)=>{
  //   this.setState({ password: value })
  //   if (this.state.password != ""){
  //     alert ("Success")
  //   }else{
  //     alert("Please Enter Valid password")
  //   }
  // }

  handleChangeUsername = value => {
    this.setState({ username: value });
  };
  handleChangePassword = value => {
    this.setState({ password: value });
  };

  handleLogin = async () => {
    const navigation = this.props.navigation;
    await authStore.loginUser(this.state, navigation);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <>
        <ImageBackground
          source={require("../assets/bgforall.jpg")}
          style={styles.stylee}
        >
          <View style={{ marginTop: 150 }}>
            <Item>
              <Icon
                style={{ color: "#fff", fontSize: 30 }}
                type="FontAwesome"
                name="user"
              />
              <Input
                style={styles.inputBox}
                placeholder="Username"
                autoCorrect={false}
                autoCapitalize="none"
                value={this.state.username}
                onChangeText={this.handleChangeUsername}
              />
            </Item>
            <Item>
              <Icon
                style={{ color: "#fff", fontSize: 30 }}
                type="FontAwesome"
                name="lock"
              />
              <Input
                style={styles.inputBox}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={this.handleChangePassword}
              />
            </Item>
          </View>

          <View style={styles.container} />

          <TouchableOpacity style={styles.button}>
            <Text onPress={this.handleLogin} style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              {"\n"}Don't have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}
                onPress={() => this.props.navigation.navigate("Register")}
              >
                {"\n"}
                Create New Account
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </>
    );
  }
}
export default observer(Login);
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  stylee: {
    flex: 1,
    width: "100%",
    height: "100%"
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255,255, 0.5)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 25,
    color: "black",
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    marginLeft: 50,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center"
  }
});
