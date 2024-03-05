export class Person {
  imExist = false;
  imHuman = false;
  man = false;
  woman = false;
  prettierThanAgata = false;
  megaWaz = false;
  nonBinary = false;
  inteligent = false;
  left = false;
  snap = false;
  madePage = false;
  lol = false;
  autism = false;
  girl = false;
  sigma = false;
  gay = false;
  lesbian = false;
  kid = false;
  fortnite = false;
  cheat = false;
  kidGirl = false;
  pedo = false;
  boy = false;
  kidBoyfriend = false;

  setWoman = () => {
    if (!this.woman) {
      this.man = false;
      this.woman = true;
      this.nonBinary = true;
      this.lesbian = true;
    } else {
      this.woman = false;
    }
  };
  setMan = () => {
    if (!this.man) {
      this.man = true;
      this.woman = true;
      this.nonBinary = false;
      this.lesbian = false;
    } else {
      this.man = false;
    }
  };
}
