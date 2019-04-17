import { decorate, observable } from "mobx";
import axios from "axios";

class PetStore {
  petState = null;
  loading = true;
  food = ["chocolate", "chicken", "carrots"];
  fetch = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/pet");
      let petState = res.data;
      this.coffeeshops = coffeeshops;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  dogFeed = async () => {
    try {
      let res = await axios.post("http://127.0.0.1:8000/api/pet/feed");
    } catch (err) {
      console.error(err);
    }
  };
}
decorate(PetStore, {
  petState: observable,
  loading: observable
});
let petStore = new PetStore();

export default PetStore;
