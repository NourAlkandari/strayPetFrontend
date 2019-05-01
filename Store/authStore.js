import { observable, decorate } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

class AuthStore {
  user = null;

  loginUser = async (userData, navigation) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        userData
      );
      const user = res.data;
      await this.setUser(user.token);

      navigation.navigate("FoundThePuppy");
    } catch (error) {
      console.log(error);
    }
  };
  registerUser = async (userData, navigation) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        userData
      );
      const user = res.data;
      await this.setUser(user.token);

      navigation.navigate("Message");
    } catch (error) {
      console.log(error);
    }
  };

  // registerUser = async (userData, navigation) => {
  //   try {
  //     await axios.post("http://127.0.0.1:8000/api/register/", userData);

  //     this.loginUser(userData, navigation);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  setUser = async token => {
    if (token) {
      await AsyncStorage.setItem("myToken", token);
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
      console.log(this.user);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  checkForUser = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentDate = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentDate) {
        this.setUser(token);
        console.log("Im not expired!!");
      } else {
        this.setUser();
      }
    }
  };

  logout = navigation => {
    this.setUser();
    navigation.navigate("SplashScreen");
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForUser();
export default authStore;
