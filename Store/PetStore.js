import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.202:80/"
});

// const instance = axios.create({
//   baseURL: "http://127.0.0.1:8000/"
// });

class PetStore {
  loading = true;
  pet = null;

  food = ["Chocolate", "Today's Lunch", "Dog Food"];

  fetch = async () => {
    try {
      let res = await instance.get("/api/pet/");
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
      const res = await instance.post("/api/pet/name/", Item);
      const data = res.data;
      console.log("WHATS THE RESPONSE?", data);
      this.pet = data;
      navigation.navigate("TapsView");
    } catch (err) {
      console.error("error while naming dog", err);
    }
  };

  dogFeed = async foodItem => {
    try {
      let Item = {
        food: foodItem
      };
      console.log("HELLOOOOOOO");
      const res = await instance.post("/api/pet/feed/", Item);
      const petState = res.data;
      this.pet.state = petState;
    } catch (err) {
      console.error(err);
    }
  };

  dogEntertain = async entertainmentItem => {
    try {
      let Item = {
        entertainment: entertainmentItem
      };
      console.log("HELLOOOOOOO");
      const res = await instance.post("/api/pet/entertain/", Item);
      const petState = res.data;
      this.pet.state = petState;
    } catch (err) {
      console.error(err);
    }
  };

  putDogtoBed = async sleepItem => {
    try {
      let Item = {
        sleep: sleepItem
      };
      const res = await instance.post("/api/pet/sleep/", Item);
      const petState = res.data;
      this.pet.state = petState;
    } catch (err) {
      console.error(err);
    }
  };

  takeToVet = async vetItem => {
    try {
      let Item = {
        vet: vetItem
      };
      const res = await instance.post("/api/pet/syringe/", Item);
      const petState = res.data;
      console.log("AFTER VET", petState);
      this.pet.state = petState;
    } catch (err) {
      console.error(err);
    }
  };

  // trying to incorporate realtime needs decay (but how???). #UNNECESSARY ATM
  //   needsDecay = async x => {
  //     try {
  //       // let res = await instance.post(`http://127.0.0.1:8000/api/pet/${pet.state}`);
  //       let res = await instance.put("/api/pet/", x);
  //       const currentDate = Date.now() / 1000;
  //       this.pet = this.pet - currentDate;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
}

decorate(PetStore, {
  pet: observable,
  loading: observable,
  pet: observable
});

let petStore = new PetStore();
export default petStore;
