import React, { Component } from "react";
import { observer } from "mobx-react";
import { StyleSheet, TouchableOpacity } from "react-native";

// NativeBase Components
import { Form, Item, Input, Text, View } from "native-base";

// Store
import authStore from "../Store/authStore";

class Login extends Component {
  state = {
    username: "",
    password: "",
    email: ""
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
  handleChangeEmail = value => {
    this.setState({ email: value });
  };

  handleLogin = () => {
    const navigation = this.props.navigation;
    authStore.loginUser(this.state, navigation);
  };

  handleSignup = () => {
    const navigation = this.props.navigation;
    authStore.registerUser(this.state, navigation);
  };

  render() {
    // if (authStore.user) {
    //   this.props.navigation.navigate("PetRoom");
    // }
    return (
      // <>
      //   <Image source={{ uri: oneofone }} />
      <Form>
        <Item>
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
          <Text onPress={this.handleLogin} style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text onPress={this.handleSignup} style={styles.buttonText}>
            SignUp
          </Text>
        </TouchableOpacity>
        {/* <Button full onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button full onPress={this.handleSignup}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Button> */}
      </Form>
      // </>
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
