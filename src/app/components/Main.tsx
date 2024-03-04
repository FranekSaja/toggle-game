"use client";
import React, { useState } from "react";
import Toggle from "./Toggle";
import Profile from "./Profile";
import Button from "./Button";
import ProfileEl from "./ProfileEl";

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

  const personObject: PersonType = {
    imExist: false,
    imHuman: false,
    man: false,
    woman: false,
    prettierThanAgata: false,
    megaWaz: false,
    nonBinary: false,
    inteligent: false,
    left: false,
    snap: false,
    madePage: false,
    lol: false,
    autism: false,
    girl: false,
    sigma: false,
    gay: false,
    lesbian: false,
    kid: false,
    fortnite: false,
    cheat: false,
    kidGirl: false,
    pedo: false,
    boy: false,
    kidBoyfriend: false,
  };

  const [person, setPerson] = useState<PersonType>(personObject);
  const [profile, setProfile] = useState(false);

  const toggleState = (
    state: keyof PersonType | any,
    object: keyof PersonType | any,
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
    <div className="flex items-center justify-center w-screen h-screen flex-col">
      <div
        className={`flex items-center justify-center w-screen h-screen gap-10 flex-row transition-all ${
          profile ? "blur" : ""
        }`}
      >
        <div className="flex items-start justify-center w-80 gap-10 flex-col">
          <Toggle
            text="I exist"
            state={personObject.imExist}
            change={() => {
              toggleState(
                personObject.imExist,
                personObject.imExist,
                () => {
                  setPerson({ ...person, prettierThanAgata: false });
                },
                () => {
                  setPerson({ ...person, megaWaz: true, madePage: true });
                }
              );
            }}
          />

          <Toggle
            text="I'm Human"
            state={personObject.imHuman}
            change={() => {
              toggleState(
                personObject.imHuman,
                personObject.imHuman,
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
            state={personObject.man}
            change={() => {
              toggleState(
                personObject.man,
                personObject.man,
                () => {
                  setPerson({
                    ...person,
                    woman: false,
                    nonBinary: false,
                    lesbian: false,
                    imHuman: true,
                  });

                  if (personObject.lol) {
                    setPerson({
                      ...person,
                      gay: true,
                      girl: false,
                      kidGirl: false,
                    });
                  }
                  if (personObject.boy) {
                    setPerson({ ...person, gay: true });
                  }
                },
                () => {
                  setPerson({ ...person, madePage: false, gay: false });
                }
              );
            }}
          />

          <Toggle
            text="I'm Woman"
            state={personObject.woman}
            change={() => {
              toggleState(
                personObject.woman,

                personObject.woman,
                () => {
                  setPerson({
                    ...person,
                    man: false,
                    nonBinary: false,
                    madePage: false,
                    gay: false,
                  });

                  if (personObject.girl) {
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
            state={personObject.inteligent}
            change={() => {
              toggleState(
                personObject.inteligent,
                personObject.inteligent,
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
            state={personObject.nonBinary}
            change={() => {
              toggleState(
                personObject.nonBinary,

                personObject.nonBinary,
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
            state={personObject.kid}
            change={() => {
              toggleState(
                personObject.kid,

                personObject.kid,
                () => {
                  if (personObject.girl) {
                    setPerson({ ...person, kidGirl: true });
                  }

                  if (personObject.boy) {
                    setPerson({ ...person, kidBoyfriend: true });
                  }

                  setPerson({ ...person, pedo: false, madePage: false });
                },
                () => {
                  setPerson({ ...person, fortnite: false });

                  if (personObject.kidGirl) {
                    setPerson({ ...person, pedo: true });
                  }
                  if (personObject.kidBoyfriend) {
                    setPerson({ ...person, pedo: true });
                  }
                }
              );
            }}
          />
          <Toggle
            text="I have boyfriend"
            state={personObject.boy}
            change={() => {
              toggleState(
                personObject.boy,

                personObject.boy,
                () => {
                  if (personObject.man) {
                    setPerson({ ...person, gay: true, sigma: false });
                  }

                  if (personObject.kid) {
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
            state={personObject.girl}
            change={() => {
              toggleState(
                personObject.girl,
                personObject.girl,

                () => {
                  if (personObject.woman) {
                    setPerson({ ...person, lesbian: true });
                  }

                  if (personObject.kid) {
                    setPerson({ ...person, kidGirl: true });
                  }

                  if (!personObject.woman) {
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
            state={personObject.kidBoyfriend}
            change={() => {
              toggleState(
                personObject.kidBoyfriend,
                personObject.kidBoyfriend,

                () => {
                  setPerson({
                    ...person,
                    boy: true,
                    kid: true,
                    madePage: false,
                    girl: false,
                    kidGirl: false,
                  });

                  if (personObject.man) {
                    setPerson({ ...person, gay: true });
                  }
                },
                () => {
                  setPerson({ ...person, boy: false, kid: false, pedo: false });
                }
              );
            }}
          />
          <Toggle
            text="My girlfriend is under 13"
            state={personObject.kidGirl}
            change={() => {
              toggleState(
                personObject.kidGirl,
                personObject.kidGirl,
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

                  if (!personObject.woman) {
                    setPerson({ ...person, lol: false });
                  }
                  if (personObject.woman) {
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
            state={personObject.left}
            change={() => {
              toggleState(
                personObject.left,
                personObject.left,

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
            state={personObject.sigma}
            change={() => {
              toggleState(
                personObject.sigma,
                personObject.sigma,

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
            state={personObject.gay}
            change={() => {
              toggleState(
                personObject.gay,
                personObject.gay,

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
            state={personObject.lesbian}
            change={() => {
              toggleState(
                personObject.lesbian,
                personObject.lesbian,

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
                  if (personObject.woman && personObject.girl) {
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
                personObject.prettierThanAgata,
                personObject.prettierThanAgata,

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
            state={personObject.prettierThanAgata}
          />
        </div>
        <div className="flex items-start justify-center w-80 gap-10 flex-col">
          <Toggle
            text="I have autism"
            state={personObject.autism}
            change={() =>
              toggleState(
                personObject.autism,
                personObject.autism,

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
            state={personObject.megaWaz}
            change={() =>
              toggleState(
                personObject.megaWaz,
                personObject.megaWaz,

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
            state={personObject.snap}
            change={() => {
              toggleState(
                personObject.snap,
                personObject.snap,

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
            state={personObject.madePage}
            change={() => {
              toggleState(
                personObject.madePage,
                personObject.madePage,

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
            state={personObject.lol}
            change={() => {
              toggleState(
                personObject.lol,
                personObject.lol,

                () => {
                  setPerson({
                    ...person,
                    inteligent: false,
                    autism: true,
                    sigma: false,
                    madePage: false,
                  });

                  if (!personObject.woman) {
                    setPerson({ ...person, girl: false, kidGirl: false });
                  }
                  if (personObject.man) {
                    setPerson({ ...person, gay: true });
                  }
                },
                () => {}
              );
            }}
          />
          <Toggle
            text="I play Fortnite"
            state={personObject.fortnite}
            change={() => {
              toggleState(
                personObject.fortnite,

                personObject.fortnite,
                () => {
                  setPerson({
                    ...person,
                    kid: true,
                    pedo: false,
                    madePage: false,
                  });

                  if (personObject.girl) {
                    setPerson({ ...person, kidGirl: true });
                  }

                  if (personObject.boy) {
                    setPerson({ ...person, kidBoyfriend: true });
                  }
                },
                () => {}
              );
            }}
          />
          <Toggle
            text="I'm Pedofile"
            state={personObject.pedo}
            change={() =>
              toggleState(
                personObject.pedo,
                personObject.pedo,

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
                  setPerson({ ...person, kidGirl: false, kidBoyfriend: false });
                }
              )
            }
          />

          <Toggle
            text="I can cheat toggle game"
            state={personObject.cheat}
            change={() => {
              setPerson({ ...person, cheat: false });
            }}
          />
        </div>
      </div>
      {profile && (
        <Profile
          text={
            <div className="flex items-start justify-center flex-col">
              {!personObject.imExist && <ProfileEl text="You don't Exist" />}
              {!personObject.imHuman && <ProfileEl text="You are not Human" />}

              {personObject.megaWaz && <ProfileEl text="You are Mega Wąż 9" />}
              {personObject.kid && <ProfileEl text="You are a Kid" />}
              {personObject.nonBinary && (
                <ProfileEl text="You are Non-binary" />
              )}
              {personObject.man && <ProfileEl text="You are Man" />}
              {personObject.gay && <ProfileEl text="You are Gay" />}
              {personObject.woman && <ProfileEl text="You are Woman" />}
              {personObject.lesbian && <ProfileEl text="You are Lesbian" />}
              {personObject.inteligent ? (
                <ProfileEl text="You are Intelligent" />
              ) : (
                <ProfileEl text="You are not Intelligent" />
              )}

              {personObject.autism && <ProfileEl text="You have autism" />}
              {personObject.boy && !personObject.kidBoyfriend && (
                <ProfileEl text="You have boyfriend" />
              )}
              {personObject.boy && personObject.kidBoyfriend && (
                <ProfileEl text="Your boyfriend is under 13" />
              )}
              {personObject.girl && !personObject.kidGirl && (
                <ProfileEl text="You have girlfriend" />
              )}
              {personObject.girl && personObject.kidGirl && (
                <ProfileEl text="Your girlfriend is under 13" />
              )}
              {personObject.left && <ProfileEl text="You are Lefist" />}

              {personObject.snap && <ProfileEl text="You use Snapchat" />}

              {personObject.lol && (
                <ProfileEl text="You play League of Legends" />
              )}
              {personObject.fortnite && <ProfileEl text="You play Fortnite" />}

              {personObject.pedo && <ProfileEl text="You are Pedofile" />}
              {personObject.sigma && <ProfileEl text="You are Sigma" />}
              {personObject.madePage && (
                <ProfileEl text="You are Franciszek Saja" />
              )}
            </div>
          }
          exit={() => {
            setProfile(false);
          }}
        />
      )}
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
  );
}

export default Main;
