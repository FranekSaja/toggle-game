import { usePerson } from "./usePerson";

export function useTogglePerson() {
  const {
    person,
    disableAll,
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
  } = usePerson();

  const toggleState = (
    isEnabled: any,
    switchStateTrue: () => void,
    switchStateFalse: () => void
  ) => {
    switchStateTrue();
    if (isEnabled) {
      switchStateFalse();
    }
  };

  const toggleConfig = [
    {
      name: "I exist",
      stateKey: person.imExist,
      action: () => {
        toggleState(person.imExist, exist, existOff);
      },
    },
    {
      name: "I am Human",
      stateKey: person.imHuman,
      action: () => {
        toggleState(person.imHuman, human, humanOff);
      },
    },
    {
      name: "I am Man",
      stateKey: person.man,
      action: () => {
        toggleState(
          person.man,
          () => {
            man();
            if (person.boy) {
              gay();
            }
          },
          manOff
        );
      },
    },
    {
      name: "I am Woman",
      stateKey: person.woman,
      action: () => {
        toggleState(
          person.woman,
          () => {
            woman();
            if (person.girl) {
              lesbian();
            }
          },
          womanOff
        );
      },
    },
    {
      name: "I am Intelligent",
      stateKey: person.inteligent,
      action: () => {
        toggleState(person.inteligent, inteligent, inteligentOff);
      },
    },
    {
      name: "I am non-binary",
      stateKey: person.nonBinary,
      action: () => {
        toggleState(person.nonBinary, nonbinary, nonbinaryOff);
      },
    },
    {
      name: "I am Kid",
      stateKey: person.kid,
      action: () => {
        toggleState(
          person.kid,
          () => {
            kid();
            if (person.girl) {
              kidgirl();
            }
            if (person.boy) {
              kidboy();
            }
          },
          kidOff
        );
      },
    },
    {
      name: "I have boyfriend",
      stateKey: person.boy,
      action: () => {
        toggleState(
          person.boy,
          () => {
            boyfriend();
            if (person.kid) {
              kidboy();
            }
          },
          boyfriendOff
        );
      },
    },
    {
      name: "I have girlfriend",
      stateKey: person.girl,
      action: () => {
        toggleState(
          person.girl,
          () => {
            girlfriend();
            if (person.kid) {
              kidgirl();
            }
          },
          girlfriendOff
        );
      },
    },
    {
      name: "My boyfriend is under 13",
      stateKey: person.kidBoyfriend,
      action: () => {
        toggleState(person.kidBoyfriend, kidboy, kidboyOff);
      },
    },
    {
      name: "My girlfriend is under 13",
      stateKey: person.kidGirl,
      action: () => {
        toggleState(person.kidGirl, kidgirl, kidgirlOff);
      },
    },
    {
      name: "I vote for the left",
      stateKey: person.left,
      action: () => {
        toggleState(person.left, lefist, lefistOff);
      },
    },
    {
      name: "I am Sigma",
      stateKey: person.sigma,
      action: () => {
        toggleState(person.sigma, sigma, sigmaOff);
      },
    },
    {
      name: "I am Gay",
      stateKey: person.gay,
      action: () => {
        toggleState(person.gay, gay, gayOff);
      },
    },
    {
      name: "I am lesbian",
      stateKey: person.lesbian,
      action: () => {
        toggleState(person.lesbian, lesbian, lesbianOff);
      },
    },
    {
      name: "I am prettier than Agata",
      stateKey: person.prettierThanAgata,
      action: () => {
        toggleState(
          person.prettierThanAgata,
          prettierthanagata,
          prettierthanagataOff
        );
      },
    },
    {
      name: "I have autism",
      stateKey: person.autism,
      action: () => {
        toggleState(person.autism, autism, autismOff);
      },
    },
    {
      name: "I am Mega Wąż 9",
      stateKey: person.megaWaz,
      action: () => {
        toggleState(person.megaWaz, megawaz, megawazOff);
      },
    },
    {
      name: "I use snapchat",
      stateKey: person.snap,
      action: () => {
        toggleState(person.snap, snapchat, snapchatOff);
      },
    },
    {
      name: "I made this page",
      stateKey: person.madePage,
      action: () => {
        toggleState(person.madePage, madethispage, madethispageOff);
      },
    },
    {
      name: "I play League of Legends",
      stateKey: person.lol,
      action: () => {
        toggleState(person.lol, ligalegend, ligalegendOff);
      },
    },
    {
      name: "I play Fortnite",
      stateKey: person.fortnite,
      action: () => {
        toggleState(person.fortnite, fortnite, fortniteOff);
      },
    },
    {
      name: "I am Pedofile",
      stateKey: person.pedo,
      action: () => {
        toggleState(person.pedo, pedofile, pedofileOff);
      },
    },
    {
      name: "I can cheat Toggle game",
      stateKey: person.cheat,
      action: () => {
        toggleState(
          person.cheat,
          () => {},
          () => {}
        );
      },
    },
  ];

  return {
    toggleConfig,
    person,
    disableAll,
  };
}
