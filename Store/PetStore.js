import { decorate, observable, computed } from "mobx";
import axios from "axios";
import authStore from "./authStore";

class PetStore {
  petState = null;
  loading = true;

  food = ["Chocolate", "Today's Lunch", "Dog Food"];

  fetch = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/pet/");
      let petState = res.data;
      this.petState = petState;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  //  from the button pass as string, put in dict and pass to backend
  // dogFeed("Dog Food")

  nameDog = async nameItem => {
    try {
      let Item = {
        name: nameItem
      };
      await axios.put("http://127.0.0.1:8000/api/pet/name/", Item);
      let petState = res.data;
      this.setState({ petState: petState });
    } catch (err) {
      console.error(err);
    }
  };

  dogFeed = async foodItem => {
    try {
      let Item = {
        food: foodItem
      };
      await axios.put("http://127.0.0.1:8000/api/pet/feed/", Item);
    } catch (err) {
      console.error(err);
    }
  };

  // trying to incorporate realtime needs decay (but how???)
  needsDecay = async x => {
    try {
      // let res = await axios.post(`http://127.0.0.1:8000/api/pet/${pet.state}`);
      let res = await axios.put("http://127.0.0.1:8000/api/pet/", x);
      const currentDate = Date.now() / 1000;
      this.petState = this.petState - currentDate;
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

export default petStore;
