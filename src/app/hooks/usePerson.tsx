import { useState } from "react";
import { Person } from "../classes/person.class";

export function usePerson() {
  const [person, setPerson] = useState<Person>(new Person());

  const womanOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      woman: false,
      human: false,
      lesbian: false,
    }));
  };

  const exist = () => {
    setPerson((prevPerson) => ({ ...prevPerson, imExist: true }));
    prettierthanagataOff();
  };

  const existOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      imExist: false,
    }));
    megawazOff();
    madethispageOff();
  };

  const human = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      imHuman: true,
    }));
    nonbinaryOff();
    megawazOff();
  };

  const humanOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      imHuman: false,
      man: false,
      gay: false,
      lesbian: false,
      woman: false,
    }));

    madethispageOff();
  };

  const man = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      man: true,
      woman: false,
      lesbian: false,
    }));
    human();
    if (person.lol && !person.gay) {
      gay();
    }
  };

  const manOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      man: false,
      human: false,
      gay: false,
    }));
    madethispageOff();
  };

  const woman = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      woman: true,
      man: false,
      gay: false,
    }));
    human();
    madethispageOff();
  };

  const inteligent = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      inteligent: true,
      lol: false,
      snap: false,
      left: false,
    }));
  };

  const inteligentOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      inteligent: false,
      sigma: false,
      madePage: false,
    }));
  };

  const nonbinary = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      nonBinary: true,
    }));
    humanOff();
    madethispageOff();
  };

  const nonbinaryOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, nonBinary: false }));
  };

  const kid = () => {
    setPerson((prevPerson) => ({ ...prevPerson, kid: true, pedo: false }));
    madethispageOff();
    megawazOff();
  };

  const kidOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, kid: false, fortnite: false }));
    if (person.kidBoyfriend || person.kidGirl) {
      pedofile();
    }
  };

  const boyfriend = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      boy: true,
    }));
    kidgirlOff();
    madethispageOff();
    if (person.man) {
      gay();
    }
  };

  const boyfriendOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson }));
    kidboyOff();
  };

  const girlfriend = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      girl: true,
      kidBoyfriend: false,
      boy: false,
    }));
    if (person.woman) {
      lesbian();
    }
    if (person.man) {
      ligalegendOff();
    }
  };

  const girlfriendOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, madePage: false }));
    kidgirlOff();
  };

  const kidboy = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      kidBoyfriend: true,
    }));
    boyfriend();
    madethispageOff();
    kid();
  };

  const kidboyOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      kidBoyfriend: false,
      boy: false,
    }));
  };

  const kidgirl = () => {
    setPerson((prevPerson) => ({ ...prevPerson, kidGirl: true }));
    girlfriend();
    kid();
  };

  const kidgirlOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, kidGirl: false, girl: false }));
  };

  const lefist = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      left: true,
    }));
    inteligentOff();
    sigmaOff();
  };

  const lefistOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, left: false }));
  };

  const sigma = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      sigma: true,
      autism: false,
      pedo: false,
      gay: false,
      lesbian: false,
    }));
    inteligent();
  };

  const sigmaOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      sigma: false,
      madePage: false,
    }));
  };

  const lesbian = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      lesbian: true,
      gay: false,
    }));
    woman();
    sigmaOff();
  };

  const lesbianOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      lesbian: false,
    }));
    kidgirlOff();
  };

  const gay = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      gay: true,
      lesbian: false,
    }));
    man();
    sigmaOff();
  };

  const gayOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, gay: false }));
    kidboyOff();
    if (person.lol) {
      ligalegendOff();
    }
  };

  const prettierthanagata = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      prettierThanAgata: true,
    }));
    existOff();
  };

  const prettierthanagataOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, prettierThanAgata: false }));
  };

  const autism = () => {
    setPerson((prevPerson) => ({ ...prevPerson, autism: true }));
    sigmaOff();
  };

  const autismOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, autism: false, lol: false }));
  };

  const megawaz = () => {
    setPerson((prevPerson) => ({ ...prevPerson, megaWaz: true }));
    exist();
    inteligent;
    humanOff();
    madethispageOff();
    kidOff();
  };

  const megawazOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, megaWaz: false }));
  };

  const snapchat = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      snap: true,
    }));
    sigmaOff();
    inteligentOff();
  };

  const snapchatOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, snap: false }));
  };

  const madethispage = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      madePage: true,
      kidGirl: false,
      kid: false,
      man: true,
      woman: false,
      fortnite: false,
    }));
    sigma();
    exist();
    human();
    girlfriend();
  };

  const madethispageOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, madePage: false }));
  };

  const ligalegend = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      lol: true,
    }));
    autism();
    sigmaOff();
    inteligentOff();
    if (!person.woman) {
      kidgirlOff();
    }
    if (person.man) {
      gay();
    }
  };

  const ligalegendOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, lol: false }));
  };

  const fortnite = () => {
    setPerson((prevPerson) => ({ ...prevPerson, fortnite: true }));
    kid();
    if (person.girl) {
      kidgirl();
    }
    if (person.boy) {
      kidboy();
    }
  };

  const fortniteOff = () => {
    setPerson((prevPerson) => ({ ...prevPerson, fortnite: false }));
    kidOff();
  };

  const pedofile = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      pedo: true,
      kid: false,
    }));
    sigmaOff();
  };

  const pedofileOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      pedo: false,
      kidBoyfriend: false,
      kidGirl: false,
      kid: false,
    }));
  };

  const disableAll = () => {
    setPerson({
      ...new Person(),
    });
  };

  return {
    person,
    womanOff,
    exist,
    existOff,
    human,
    humanOff,
    man,
    manOff,
    woman,
    inteligent,
    inteligentOff,
    nonbinary,
    nonbinaryOff,
    kid,
    kidOff,
    boyfriend,
    boyfriendOff,
    girlfriend,
    girlfriendOff,
    kidboy,
    kidboyOff,
    kidgirl,
    kidgirlOff,
    lefist,
    lefistOff,
    sigma,
    sigmaOff,
    lesbian,
    lesbianOff,
    gay,
    gayOff,
    prettierthanagata,
    prettierthanagataOff,
    autism,
    autismOff,
    megawaz,
    megawazOff,
    snapchat,
    snapchatOff,
    madethispage,
    madethispageOff,
    ligalegend,
    ligalegendOff,
    fortnite,
    fortniteOff,
    pedofile,
    pedofileOff,
    disableAll,
  };
}
