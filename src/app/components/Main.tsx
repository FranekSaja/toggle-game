"use client";
import React, { useState } from "react";
import Toggle from "./Toggle";
import Profile from "./Profile";
import Button from "./Button";
import ProfileEl from "./ProfileEl";
import { Person } from "../classes/person.class";

function Main() {
  const [person, setPerson] = useState<Person>(new Person());
  const [profile, setProfile] = useState(false);

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

  const toggleConfig = [
    {
      name: "I exist",
      stateKey: person.imExist,
      action: () => {
        toggleState(
          person.imExist,
          person.imExist,
          () => {
            setPerson({ ...person, imExist: true });
          },
          () => {
            setPerson({ ...person, imExist: false, megaWaz: false });
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
            setPerson({ ...person, imHuman: true });
          },
          () => {
            setPerson({ ...person, imHuman: false });
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
            setPerson({ ...person, man: true, imHuman: true, woman: false });
          },
          () => {
            setPerson({ ...person, man: false, gay: false });
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
            setPerson({ ...person, woman: true, man: false });
          },
          () => {
            setPerson({ ...person, woman: false, lesbian: false });
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
            setPerson({
              ...person,
              inteligent: true,
              left: false,
              snap: false,
              lol: false,
            });
          },
          () => {
            setPerson({ ...person, inteligent: false, sigma: false });
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
            setPerson({
              ...person,
              nonBinary: true,
              imHuman: false,
              man: false,
              woman: false,
            });
          },
          () => {
            setPerson({ ...person, nonBinary: false });
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
            setPerson({ ...person, kid: true });
          },
          () => {
            setPerson({ ...person, kid: false });
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
            setPerson({ ...person, boy: true, girl: false });
          },
          () => {
            setPerson({ ...person, boy: false, kidBoyfriend: false });
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
            setPerson({ ...person, girl: true, boy: false });
          },
          () => {
            setPerson({ ...person, girl: false, kidGirl: false });
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
            setPerson({ ...person, kidBoyfriend: true, boy: true });
          },
          () => {
            setPerson({ ...person, kidBoyfriend: false, boy: false });
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
            setPerson({ ...person, kidGirl: true, girl: true });
          },
          () => {
            setPerson({ ...person, kidGirl: false, girl: false });
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
            setPerson({
              ...person,
              left: true,
              inteligent: false,
              sigma: false,
            });
          },
          () => {
            setPerson({ ...person, left: false });
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
            setPerson({
              ...person,
              sigma: true,
              left: false,
              lol: false,
              gay: false,
              lesbian: false,
              inteligent: true,
            });
          },
          () => {
            setPerson({ ...person, sigma: false });
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
            setPerson({
              ...person,
              gay: true,
              man: true,
              woman: false,
              nonBinary: false,
              imHuman: true,
            });
          },
          () => {
            setPerson({ ...person, gay: false, man: false });
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
            setPerson({
              ...person,
              lesbian: true,
              woman: true,
              man: false,
              nonBinary: false,
              imHuman: true,
            });
          },
          () => {
            setPerson({ ...person, lesbian: false });
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
            setPerson({
              ...person,
              prettierThanAgata: true,
              imExist: false,
              megaWaz: false,
            });
          },
          () => {
            setPerson({ ...person, prettierThanAgata: false });
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
            setPerson({ ...person, autism: true });
          },
          () => {
            setPerson({ ...person, autism: false, lol: false });
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
            setPerson({ ...person, megaWaz: true, imExist: true });
          },
          () => {
            setPerson({ ...person, megaWaz: false, imExist: false });
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
            setPerson({
              ...person,
              snap: true,
              inteligent: false,
              sigma: false,
            });
          },
          () => {
            setPerson({ ...person, snap: false });
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
            setPerson({ ...person, madePage: true });
          },
          () => {
            setPerson({ ...person, madePage: false });
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
            setPerson({ ...person, lol: true, autism: true });
          },
          () => {
            setPerson({ ...person, lol: false });
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
            setPerson({ ...person, fortnite: true, kid: true });
          },
          () => {
            setPerson({ ...person, fortnite: false });
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
            setPerson({ ...person, pedo: true, kid: false });
          },
          () => {
            setPerson({ ...person, pedo: false });
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
          () => {
            setPerson({ ...person, cheat: false });
          },
          () => {}
        );
      },
    },
  ];

  return (
    <>
      <div className="flex items-center justify-start w-screen h-screen flex-col gap-10">
        {profile && (
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
              setProfile(false);
            }}
          />
        )}
        <div className="flex items-center justify-center h-20 text-7xl font-bold text-gray-400">
          MARK YOURSELF
        </div>
        <div className="flex flex-row gap-10">
          <Button
            blur={`${profile ? "blur" : ""}`}
            click={() => {
              setProfile(true);
            }}
            text="See your Profile"
          />
          <Button
            blur={`${profile ? "blur" : ""}`}
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
              });
            }}
            text="Disable all"
          />
        </div>
        <div
          className={`grid grid-flow-col grid-rows-8 gap-10 ${
            profile ? "blur" : ""
          }`}
        >
          {toggleConfig.map((el) => {
            return (
              <div className="flex items-center justify-start w-[350px] h-10">
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
