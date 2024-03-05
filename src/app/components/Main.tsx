"use client";
import React, { useState } from "react";
import Toggle from "./Toggle";
import Profile from "./Profile";
import Button from "./Button";
import ProfileEl from "./ProfileEl";
import { Person } from "../classes/person.class";

function Main() {
  interface PersonType {
    imExist: boolean;
    imHuman: boolean;
    man: boolean;
    woman: boolean;
    prettierThanAgata: boolean;
    megaWaz: boolean;
    nonBinary: boolean;
    inteligent: boolean;
    left: boolean;
    snap: boolean;
    madePage: boolean;
    lol: boolean;
    autism: boolean;
    girl: boolean;
    sigma: boolean;
    gay: boolean;
    lesbian: boolean;
    kid: boolean;
    fortnite: boolean;
    cheat: boolean;
    kidGirl: boolean;
    pedo: boolean;
    boy: boolean;
    kidBoyfriend: boolean;
  }

  const [person, setPerson] = useState<Person>(new Person());
  const [profile, setProfile] = useState(false);

  const toggleState = (
    state: any,
    object: any,
    switchStateTrue: () => void,
    switchStateFalse: () => void
  ) => {
    if (!state) {
      setPerson({ ...person, [state]: true });
    } else {
      setPerson({ ...person, [state]: false });
    }

    if (state === object) {
      switchStateTrue();
    }
    if (state && object === object) {
      switchStateFalse();
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen flex-col">
        <div
          className={`flex items-center justify-center w-screen h-screen gap-10 flex-row transition-all ${
            profile ? "blur" : ""
          }`}
        >
          <div className="flex items-start justify-center w-80 gap-10 flex-col">
            <Toggle
              text="I exist"
              state={person.imExist}
              change={() => {
                setPerson((prev) => ({ ...prev, imExist: !prev.imExist }));
              }}
            />

            <Toggle
              text="I'm Human"
              state={person.imHuman}
              change={() => {
                toggleState(
                  person.imHuman,
                  person.imHuman,
                  () => {
                    setPerson({ ...person, megaWaz: false, nonBinary: false });
                  },
                  () => {
                    setPerson({
                      ...person,
                      madePage: false,
                      man: false,
                      woman: false,
                    });
                  }
                );
              }}
            />

            <Toggle
              text="I'm Man"
              state={person.man}
              change={() => {
                setPerson(() => {
                  person.setMan();
                  console.log(person);
                  return person;
                });

                // toggleState(
                //   person.man,
                //   person.man,
                //   () => {
                //     setPerson({
                //       ...person,
                //       woman: false,
                //       nonBinary: false,
                //       lesbian: false,
                //       imHuman: true,
                //     });

                //     if (person.lol) {
                //       setPerson({
                //         ...person,
                //         gay: true,
                //         girl: false,
                //         kidGirl: false,
                //       });
                //     }
                //     if (person.boy) {
                //       setPerson({ ...person, gay: true });
                //     }
                //   },
                //   () => {
                //     setPerson({ ...person, madePage: false, gay: false });
                //   }
                // );
              }}
            />

            <Toggle
              text="I'm Woman"
              state={person.woman}
              change={() => {
                toggleState(
                  person.woman,

                  person.woman,
                  () => {
                    setPerson((prev) => ({
                      ...prev,
                      man: false,
                      nonBinary: false,
                      madePage: false,
                      gay: false,
                    }));

                    if (person.girl) {
                      setPerson({ ...person, lesbian: true, imHuman: true });
                    }
                  },
                  () => {
                    setPerson({ ...person, lesbian: false });
                  }
                );
              }}
            />
            <Toggle
              text="I'm Intelligent"
              state={person.inteligent}
              change={() => {
                toggleState(
                  person.inteligent,
                  person.inteligent,
                  () => {
                    setPerson({
                      ...person,
                      left: false,
                      snap: false,
                      lol: false,
                    });
                  },
                  () => {
                    setPerson({ ...person, madePage: false, sigma: false });
                  }
                );
              }}
            />
            <Toggle
              text="I'm non-binary"
              state={person.nonBinary}
              change={() => {
                toggleState(
                  person.nonBinary,

                  person.nonBinary,
                  () => {
                    setPerson({
                      ...person,
                      imHuman: false,
                      man: false,
                      woman: false,
                      madePage: false,
                      gay: false,
                    });
                  },
                  () => {}
                );
              }}
            />

            <Toggle
              text="I'm Kid"
              state={person.kid}
              change={() => {
                toggleState(
                  person.kid,

                  person.kid,
                  () => {
                    if (person.girl) {
                      setPerson({ ...person, kidGirl: true });
                    }

                    if (person.boy) {
                      setPerson({ ...person, kidBoyfriend: true });
                    }

                    setPerson({ ...person, pedo: false, madePage: false });
                  },
                  () => {
                    setPerson({ ...person, fortnite: false });

                    if (person.kidGirl) {
                      setPerson({ ...person, pedo: true });
                    }
                    if (person.kidBoyfriend) {
                      setPerson({ ...person, pedo: true });
                    }
                  }
                );
              }}
            />
            <Toggle
              text="I have boyfriend"
              state={person.boy}
              change={() => {
                toggleState(
                  person.boy,

                  person.boy,
                  () => {
                    if (person.man) {
                      setPerson({ ...person, gay: true, sigma: false });
                    }

                    if (person.kid) {
                      setPerson({ ...person, kidBoyfriend: true });
                    }

                    setPerson({
                      ...person,
                      girl: false,
                      kidGirl: false,
                      madePage: false,
                    });
                  },
                  () => {
                    setPerson({ ...person, kidBoyfriend: false });
                  }
                );
              }}
            />
          </div>
          <div className="flex items-start justify-center w-80 gap-10 flex-col">
            <Toggle
              text="I have a girlfriend"
              state={person.girl}
              change={() => {
                toggleState(
                  person.girl,
                  person.girl,

                  () => {
                    if (person.woman) {
                      setPerson({ ...person, lesbian: true });
                    }

                    if (person.kid) {
                      setPerson({ ...person, kidGirl: true });
                    }

                    if (!person.woman) {
                      setPerson({ ...person, lol: false });
                    }

                    setPerson({
                      ...person,
                      lol: false,
                      madePage: false,
                      boy: false,
                      kidBoyfriend: false,
                    });
                  },
                  () => {
                    setPerson({ ...person, kidGirl: false });
                  }
                );
              }}
            />
            <Toggle
              text="My boyfriend is under 13"
              state={person.kidBoyfriend}
              change={() => {
                toggleState(
                  person.kidBoyfriend,
                  person.kidBoyfriend,

                  () => {
                    setPerson({
                      ...person,
                      boy: true,
                      kid: true,
                      madePage: false,
                      girl: false,
                      kidGirl: false,
                    });

                    if (person.man) {
                      setPerson({ ...person, gay: true });
                    }
                  },
                  () => {
                    setPerson({
                      ...person,
                      boy: false,
                      kid: false,
                      pedo: false,
                    });
                  }
                );
              }}
            />
            <Toggle
              text="My girlfriend is under 13"
              state={person.kidGirl}
              change={() => {
                toggleState(
                  person.kidGirl,
                  person.kidGirl,
                  () => {
                    setPerson({
                      ...person,
                      girl: true,
                      kid: true,
                      pedo: false,
                      boy: false,
                      kidBoyfriend: false,
                      madePage: false,
                    });

                    if (!person.woman) {
                      setPerson({ ...person, lol: false });
                    }
                    if (person.woman) {
                      setPerson({ ...person, lesbian: true });
                    }
                  },
                  () => {
                    setPerson({ ...person, girl: false, kid: false });
                  }
                );
              }}
            />
            <Toggle
              text="I vote for the left"
              state={person.left}
              change={() => {
                toggleState(
                  person.left,
                  person.left,

                  () => {
                    setPerson({
                      ...person,
                      inteligent: false,
                      madePage: false,
                      sigma: false,
                    });
                  },
                  () => {}
                );
              }}
            />
            <Toggle
              text="I'm Sigma"
              state={person.sigma}
              change={() => {
                toggleState(
                  person.sigma,
                  person.sigma,

                  () => {
                    setPerson({
                      ...person,
                      lol: false,
                      left: false,
                      inteligent: true,
                      snap: false,
                      gay: false,
                      pedo: false,
                    });
                  },
                  () => {
                    setPerson({ ...person, madePage: false });
                  }
                );
              }}
            />
            <Toggle
              text="I'm Gay"
              state={person.gay}
              change={() => {
                toggleState(
                  person.gay,
                  person.gay,

                  () => {
                    setPerson({
                      ...person,
                      sigma: false,
                      madePage: false,
                      man: true,
                      woman: false,
                      nonBinary: false,
                      lesbian: false,
                      imHuman: true,
                    });
                  },
                  () => {
                    setPerson({
                      ...person,
                      lol: false,
                      boy: false,
                      kidBoyfriend: false,
                    });
                  }
                );
              }}
            />
            <Toggle
              text="I'm Lesbian"
              state={person.lesbian}
              change={() => {
                toggleState(
                  person.lesbian,
                  person.lesbian,

                  () => {
                    setPerson({
                      ...person,
                      woman: true,
                      man: false,
                      gay: false,
                      sigma: false,
                      nonBinary: false,
                      madePage: false,
                      imHuman: false,
                    });
                  },
                  () => {
                    if (person.woman && person.girl) {
                      setPerson({ ...person, girl: false });
                    }
                  }
                );
              }}
            />
            <Toggle
              text="I'm prettier than Agata"
              change={() =>
                toggleState(
                  person.prettierThanAgata,
                  person.prettierThanAgata,

                  () => {
                    setPerson({
                      ...person,
                      imExist: false,
                      megaWaz: false,
                      madePage: false,
                    });
                  },
                  () => {}
                )
              }
              state={person.prettierThanAgata}
            />
          </div>
          <div className="flex items-start justify-center w-80 gap-10 flex-col">
            <Toggle
              text="I have autism"
              state={person.autism}
              change={() =>
                toggleState(
                  person.autism,
                  person.autism,

                  () => {
                    setPerson({ ...person, madePage: false });
                  },
                  () => {
                    setPerson({ ...person, lol: false });
                  }
                )
              }
            />
            <Toggle
              text="I'm Mega Wąż 9"
              state={person.megaWaz}
              change={() =>
                toggleState(
                  person.megaWaz,
                  person.megaWaz,

                  () => {
                    setPerson({
                      ...person,
                      imExist: true,
                      imHuman: false,
                      prettierThanAgata: false,
                      madePage: false,
                    });
                  },
                  () => {}
                )
              }
            />
            <Toggle
              text="I use snapchat"
              state={person.snap}
              change={() => {
                toggleState(
                  person.snap,
                  person.snap,

                  () => {
                    setPerson({
                      ...person,
                      inteligent: false,
                      madePage: false,
                      sigma: false,
                    });
                  },
                  () => {}
                );
              }}
            />
            <Toggle
              text="I made this page"
              state={person.madePage}
              change={() => {
                toggleState(
                  person.madePage,
                  person.madePage,

                  () => {
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
                      girl: true,
                      woman: false,
                      snap: false,
                      megaWaz: false,
                      nonBinary: false,
                      inteligent: true,
                      imHuman: true,
                      man: true,
                      imExist: true,
                      sigma: true,
                    });
                  },
                  () => {}
                );
              }}
            />
            <Toggle
              text="I play League of Legends"
              state={person.lol}
              change={() => {
                toggleState(
                  person.lol,
                  person.lol,

                  () => {
                    setPerson({
                      ...person,
                      inteligent: false,
                      autism: true,
                      sigma: false,
                      madePage: false,
                    });

                    if (!person.woman) {
                      setPerson({ ...person, girl: false, kidGirl: false });
                    }
                    if (person.man) {
                      setPerson({ ...person, gay: true });
                    }
                  },
                  () => {}
                );
              }}
            />
            <Toggle
              text="I play Fortnite"
              state={person.fortnite}
              change={() => {
                toggleState(
                  person.fortnite,

                  person.fortnite,
                  () => {
                    setPerson({
                      ...person,
                      kid: true,
                      pedo: false,
                      madePage: false,
                    });

                    if (person.girl) {
                      setPerson({ ...person, kidGirl: true });
                    }

                    if (person.boy) {
                      setPerson({ ...person, kidBoyfriend: true });
                    }
                  },
                  () => {}
                );
              }}
            />
            <Toggle
              text="I'm Pedofile"
              state={person.pedo}
              change={() =>
                toggleState(
                  person.pedo,
                  person.pedo,

                  () => {
                    setPerson({
                      ...person,
                      sigma: false,
                      madePage: false,
                      kid: false,
                      fortnite: false,
                    });
                  },
                  () => {
                    setPerson({
                      ...person,
                      kidGirl: false,
                      kidBoyfriend: false,
                    });
                  }
                )
              }
            />

            <Toggle
              text="I can cheat toggle game"
              state={person.cheat}
              change={() => {
                setPerson({ ...person, cheat: false });
              }}
            />
          </div>
        </div>

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
