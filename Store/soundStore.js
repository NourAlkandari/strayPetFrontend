import { Audio } from "expo";
import { decorate, observable, action, computed } from "mobx";
// import bgmusic from "../assets/audio/bgmusic.mp3";
class SoundStore {
  soundObject = new Audio.Sound();
  playSounds = async () => {
    try {
      await this.soundObject.loadAsync(require("../assets/audio/bgmusic.mp3"));
      await this.soundObject.playAsync();
      await this.soundObject.setIsLoopingAsync(true);
      // Your sound is playing!
    } catch (error) {
      console.log("ERROR WHILE PLAYING AUDIO", error);
      // An error occurred!
    }
  };
  playSadDog = async () => {
    try {
      await this.soundObject.loadAsync(require("../assets/audio/sadsound.mp3"));
      await this.soundObject.playAsync();
      await this.soundObject.setIsLoopingAsync(false);
      this.soundObject.stopAsync();

      // Your sound is playing!
    } catch (error) {
      console.log("ERROR WHILE PLAYING AUDIO", error);
      // An error occurred!
    }
  };
  playing = () => {
    console.log("play now");
    this.soundObject.playAsync();
    stopSound = async () => {
      this.soundObject.stopAsync();
    };
  };
}
decorate(SoundStore, {
  soundObject: observable
});
let soundStore = new SoundStore();
soundStore.playSounds();
export default soundStore;
