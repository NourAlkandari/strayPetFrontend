// React Libraries and Native Base
import React, { Component } from "react";
import { observer } from "mobx-react";
import { StyleSheet, TouchableOpacity } from "react-native";
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
    title: "Login"
  };

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
        <Form>
          <Item>
            <Icon type="FontAwesome" name="user" />
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
            <Icon type="FontAwesome" name="lock" />
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

          <View style={styles.container} />

          <TouchableOpacity style={styles.button}>
            <Text onPress={this.handleLogin} style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <Text>{"\n"}Do you have account?</Text>
            <TouchableOpacity>
              <Text
                style={{ color: "red" }}
                onPress={() => this.props.navigation.navigate("Register")}
              >
                {"\n"}
                Create New Account
              </Text>
            </TouchableOpacity>
          </View>
        </Form>
      </>
    );
  }
}
export default observer(Login);
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "black",
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    marginLeft: 50
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
