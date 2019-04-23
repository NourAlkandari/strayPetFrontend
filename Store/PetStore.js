import { decorate, observable } from "mobx";
import axios from "axios";

class PetStore {
  petState = null;
  loading = true;
  food = ["Chocolate", "Today's Lunch", "Dog Food"];

  fetch = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/pet/");
      let petState = res.data;
      this.petState = petState;
      console.log("PET STATE", this.petState);
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  //  from the button pass as string, put in dict and pass to backend
  // dogFeed("Dog Food")

  dogFeed = async foodItem => {
    try {
      let Item = {
        food: foodItem
      };
      await axios.post("http://127.0.0.1:8000/api/pet/feed/", Item);
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
