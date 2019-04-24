import { decorate, observable } from "mobx";
import axios from "axios";

class PetStore {
  loading = true;
  pet = null;

  food = ["Chocolate", "Today's Lunch", "Dog Food"];

  fetch = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/pet/");
      let pet = res.data;
      this.pet = pet;
      this.loading = false;
    } catch (err) {
      console.log("Erro in fetching the states", err);
    }
  };
  //  from the button pass as string, put in dict and pass to backend
  // dogFeed("Dog Food")

  // nameDog = async nameItem => {
  //   try {
  //     let Item = {
  //       name: nameItem
  //     };
  //     await axios.post("http://127.0.0.1:8000/api/pet/name/", Item);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  nameDog = async (Item, navigation) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/pet/name/", Item);
      const data = res.data;
      console.log("WHATS THE RESPONSE?", data);
      this.pet = data;
      navigation.navigate("PetRoom");
    } catch (err) {
      console.error(err);
    }
  };

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

  // trying to incorporate realtime needs decay (but how???)
  needsDecay = async x => {
    try {
      // let res = await axios.post(`http://127.0.0.1:8000/api/pet/${pet.state}`);
      let res = await axios.put("http://127.0.0.1:8000/api/pet/", x);
      const currentDate = Date.now() / 1000;
      this.pet = this.pet - currentDate;
    } catch (err) {
      console.error(err);
    }
  };
}
decorate(PetStore, {
  pet: observable,
  loading: observable,
  pet: observable
});
let petStore = new PetStore();

export default petStore;
