"use client";
import React, { useState } from "react";
import Toggle from "./Toggle";
import Profile from "./Profile";
import Button from "./Button";
import ProfileEl from "./ProfileEl";
import { Person } from "../classes/person.class";

function Main() {
  const [person, setPerson] = useState<Person>(new Person());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleState = (
    state: any,
    object: any,
    switchStateTrue: () => void,
    switchStateFalse: () => void
  ) => {
    if (state === object) {
      switchStateTrue();
    }
    if (state && object === object) {
      switchStateFalse();
    }
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

  const womanOff = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      woman: false,
      human: false,
      lesbian: false,
    }));
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

  const toggleConfig = [
    {
      name: "I exist",
      stateKey: person.imExist,
      action: () => {
        toggleState(
          person.imExist,
          person.imExist,
          () => {
            exist();
          },
          () => {
            existOff();
          }
        );
      },
    },
    {
      name: "I am Human",
      stateKey: person.imHuman,
      action: () => {
        toggleState(
          person.imHuman,
          person.imHuman,
          () => {
            human();
          },
          () => {
            humanOff();
          }
        );
      },
    },
    {
      name: "I am Man",
      stateKey: person.man,
      action: () => {
        toggleState(
          person.man,
          person.man,
          () => {
            man();
            if (person.boy) {
              gay();
            }
          },
          () => {
            manOff();
          }
        );
      },
    },
    {
      name: "I am Woman",
      stateKey: person.woman,
      action: () => {
        toggleState(
          person.woman,
          person.woman,
          () => {
            woman();
            if (person.girl) {
              lesbian();
            }
          },
          () => {
            womanOff();
          }
        );
      },
    },
    {
      name: "I am Intelligent",
      stateKey: person.inteligent,
      action: () => {
        toggleState(
          person.inteligent,
          person.inteligent,
          () => {
            inteligent();
          },
          () => {
            inteligentOff();
          }
        );
      },
    },
    {
      name: "I am non-binary",
      stateKey: person.nonBinary,
      action: () => {
        toggleState(
          person.nonBinary,
          person.nonBinary,
          () => {
            nonbinary();
          },
          () => {
            nonbinaryOff();
          }
        );
      },
    },
    {
      name: "I am Kid",
      stateKey: person.kid,
      action: () => {
        toggleState(
          person.kid,
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
          () => {
            kidOff();
          }
        );
      },
    },
    {
      name: "I have boyfriend",
      stateKey: person.boy,
      action: () => {
        toggleState(
          person.boy,
          person.boy,
          () => {
            boyfriend();
            if (person.kid) {
              kidboy();
            }
          },
          () => {
            boyfriendOff();
          }
        );
      },
    },
    {
      name: "I have girlfriend",
      stateKey: person.girl,
      action: () => {
        toggleState(
          person.girl,
          person.girl,
          () => {
            girlfriend();
            if (person.kid) {
              kidgirl();
            }
          },
          () => {
            girlfriendOff();
          }
        );
      },
    },
    {
      name: "My boyfriend is under 13",
      stateKey: person.kidBoyfriend,
      action: () => {
        toggleState(
          person.kidBoyfriend,
          person.kidBoyfriend,
          () => {
            kidboy();
          },
          () => {
            kidboyOff();
          }
        );
      },
    },
    {
      name: "My girlfriend is under 13",
      stateKey: person.kidGirl,
      action: () => {
        toggleState(
          person.kidGirl,
          person.kidGirl,
          () => {
            kidgirl();
          },
          () => {
            kidgirlOff();
          }
        );
      },
    },
    {
      name: "I vote for the left",
      stateKey: person.left,
      action: () => {
        toggleState(
          person.left,
          person.left,
          () => {
            lefist();
          },
          () => {
            lefistOff();
          }
        );
      },
    },
    {
      name: "I am Sigma",
      stateKey: person.sigma,
      action: () => {
        toggleState(
          person.sigma,
          person.sigma,
          () => {
            sigma();
          },
          () => {
            sigmaOff();
          }
        );
      },
    },
    {
      name: "I am Gay",
      stateKey: person.gay,
      action: () => {
        toggleState(
          person.gay,
          person.gay,
          () => {
            gay();
          },
          () => {
            gayOff();
          }
        );
      },
    },
    {
      name: "I am lesbian",
      stateKey: person.lesbian,
      action: () => {
        toggleState(
          person.lesbian,
          person.lesbian,
          () => {
            lesbian();
          },
          () => {
            lesbianOff();
          }
        );
      },
    },
    {
      name: "I am prettier than Agata",
      stateKey: person.prettierThanAgata,
      action: () => {
        toggleState(
          person.prettierThanAgata,
          person.prettierThanAgata,
          () => {
            prettierthanagata();
          },
          () => {
            prettierthanagataOff();
          }
        );
      },
    },
    {
      name: "I have autism",
      stateKey: person.autism,
      action: () => {
        toggleState(
          person.autism,
          person.autism,
          () => {
            autism();
          },
          () => {
            autismOff();
          }
        );
      },
    },
    {
      name: "I am Mega Wąż 9",
      stateKey: person.megaWaz,
      action: () => {
        toggleState(
          person.megaWaz,
          person.megaWaz,
          () => {
            megawaz();
          },
          () => {
            megawazOff();
          }
        );
      },
    },
    {
      name: "I use snapchat",
      stateKey: person.snap,
      action: () => {
        toggleState(
          person.snap,
          person.snap,
          () => {
            snapchat();
          },
          () => {
            snapchatOff();
          }
        );
      },
    },
    {
      name: "I made this page",
      stateKey: person.madePage,
      action: () => {
        toggleState(
          person.madePage,
          person.madePage,
          () => {
            madethispage();
          },
          () => {
            madethispageOff();
          }
        );
      },
    },
    {
      name: "I play League of Legends",
      stateKey: person.lol,
      action: () => {
        toggleState(
          person.lol,
          person.lol,
          () => {
            ligalegend();
          },
          () => {
            ligalegendOff();
          }
        );
      },
    },
    {
      name: "I play Fortnite",
      stateKey: person.fortnite,
      action: () => {
        toggleState(
          person.fortnite,
          person.fortnite,
          () => {
            fortnite();
          },
          () => {
            fortniteOff();
          }
        );
      },
    },
    {
      name: "I am Pedofile",
      stateKey: person.pedo,
      action: () => {
        toggleState(
          person.pedo,
          person.pedo,
          () => {
            pedofile();
          },
          () => {
            pedofileOff();
          }
        );
      },
    },
    {
      name: "I can cheat Toggle game",
      stateKey: person.cheat,
      action: () => {
        toggleState(
          person.cheat,
          person.cheat,
          () => {},
          () => {}
        );
      },
    },
  ];

  return (
    <>
      <div className="flex items-center justify-start w-screen h-screen flex-col gap-10">
        {isModalOpen && (
          <Profile
            text={
              <div className="flex items-start justify-center flex-col">
                {!person.imExist && <ProfileEl text="You don't Exist" />}
                {!person.imHuman && <ProfileEl text="You are not Human" />}

                {person.megaWaz && <ProfileEl text="You are Mega Wąż 9" />}
                {person.kid && <ProfileEl text="You are a Kid" />}
                {person.nonBinary && <ProfileEl text="You are Non-binary" />}
                {person.man && <ProfileEl text="You are Man" />}
                {person.gay && <ProfileEl text="You are Gay" />}
                {person.woman && <ProfileEl text="You are Woman" />}
                {person.lesbian && <ProfileEl text="You are Lesbian" />}
                {person.inteligent ? (
                  <ProfileEl text="You are Intelligent" />
                ) : (
                  <ProfileEl text="You are not Intelligent" />
                )}

                {person.autism && <ProfileEl text="You have autism" />}
                {person.boy && !person.kidBoyfriend && (
                  <ProfileEl text="You have boyfriend" />
                )}
                {person.boy && person.kidBoyfriend && (
                  <ProfileEl text="Your boyfriend is under 13" />
                )}
                {person.girl && !person.kidGirl && (
                  <ProfileEl text="You have girlfriend" />
                )}
                {person.girl && person.kidGirl && (
                  <ProfileEl text="Your girlfriend is under 13" />
                )}
                {person.left && <ProfileEl text="You are Lefist" />}

                {person.snap && <ProfileEl text="You use Snapchat" />}

                {person.lol && <ProfileEl text="You play League of Legends" />}
                {person.fortnite && <ProfileEl text="You play Fortnite" />}

                {person.pedo && <ProfileEl text="You are Pedofile" />}
                {person.sigma && <ProfileEl text="You are Sigma" />}
                {person.madePage && (
                  <ProfileEl text="You are Franciszek Saja" />
                )}
              </div>
            }
            exit={() => {
              setIsModalOpen(false);
            }}
          />
        )}
        <div
          className={`flex items-center justify-center h-20 text-7xl font-bold text-gray-400 ${
            isModalOpen ? "blur" : ""
          }`}
        >
          MARK YOURSELF
        </div>
        <div className="flex flex-row gap-10">
          <Button
            blur={`${isModalOpen ? "blur" : ""}`}
            click={() => {
              setIsModalOpen(true);
            }}
            text="See your Profile"
          />
          <Button
            blur={`${isModalOpen ? "blur" : ""}`}
            click={() => {
              setPerson({
                ...person,
                lesbian: false,
                pedo: false,
                boy: false,
                kidBoyfriend: false,
                lol: false,
                autism: false,
                gay: false,
                kid: false,
                fortnite: false,
                kidGirl: false,
                prettierThanAgata: false,
                left: false,
                girl: false,
                woman: false,
                snap: false,
                megaWaz: false,
                nonBinary: false,
                inteligent: false,
                imHuman: false,
                man: false,
                imExist: false,
                sigma: false,
                madePage: false,
              });
            }}
            text="Disable all"
          />
        </div>
        <div
          className={`grid grid-flow-col grid-rows-8 gap-10 ${
            isModalOpen ? "blur" : ""
          }`}
        >
          {toggleConfig.map((el) => {
            return (
              <div
                key={el.name}
                className="flex items-center justify-start w-[350px] h-10"
              >
                <Toggle text={el.name} state={el.stateKey} change={el.action} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
