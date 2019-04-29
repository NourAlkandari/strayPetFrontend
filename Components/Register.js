// React Libraries and NativeBase Components
import React, { Component } from "react";
import { observer } from "mobx-react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Form, Item, Input, Text, View, Icon } from "native-base";

// Store
import authStore from "../Store/authStore";

class Register extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };
  static navigationOptions = {
    header: null
  };

  handleChangeUsername = value => {
    this.setState({ username: value });
  };
  handleChangePassword = value => {
    this.setState({ password: value });
  };
  handleChangeEmail = value => {
    this.setState({ email: value });
  };

  handleSignup = () => {
    const navigation = this.props.navigation;
    authStore.registerUser(this.state, navigation);
  };

  render() {
    return (
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
        <Item>
          <Icon type="Entypo" name="mail" />
          <Input
            style={styles.inputBox}
            placeholder="email"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={this.handleChangeEmail}
          />
        </Item>
        <View style={styles.container} />

        <TouchableOpacity style={styles.button}>
          <Text onPress={this.handleSignup} style={styles.buttonText}>
            Create account
          </Text>
        </TouchableOpacity>
      </Form>
    );
  }
}
export default observer(Register);
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
