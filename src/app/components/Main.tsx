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
            setPerson({ ...person, imExist: false });
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
            setPerson({ ...person, man: true });
          },
          () => {
            setPerson({ ...person, man: false });
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
            setPerson({ ...person, woman: true });
          },
          () => {
            setPerson({ ...person, woman: false });
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
            setPerson({ ...person, inteligent: true });
          },
          () => {
            setPerson({ ...person, inteligent: false });
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
            setPerson({ ...person, nonBinary: true });
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
            setPerson({ ...person, boy: true });
          },
          () => {
            setPerson({ ...person, boy: false });
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
            setPerson({ ...person, girl: true });
          },
          () => {
            setPerson({ ...person, girl: false });
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
            setPerson({ ...person, kidBoyfriend: true });
          },
          () => {
            setPerson({ ...person, kidBoyfriend: false });
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
            setPerson({ ...person, kidGirl: true });
          },
          () => {
            setPerson({ ...person, kidGirl: false });
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
            setPerson({ ...person, left: true });
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
            setPerson({ ...person, sigma: true });
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
            setPerson({ ...person, gay: true });
          },
          () => {
            setPerson({ ...person, gay: false });
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
            setPerson({ ...person, lesbian: true });
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
            setPerson({ ...person, prettierThanAgata: true });
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
            setPerson({ ...person, autism: false });
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
            setPerson({ ...person, megaWaz: true });
          },
          () => {
            setPerson({ ...person, megaWaz: false });
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
            setPerson({ ...person, snap: true });
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
            setPerson({ ...person, lol: true });
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
            setPerson({ ...person, fortnite: true });
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
            setPerson({ ...person, pedo: true });
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
      <div className="flex items-center justify-center w-screen h-screen flex-col">
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
      <>
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
      </>
    </>
  );
}

export default Main;
