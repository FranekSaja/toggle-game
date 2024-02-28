"use client";
import React, { useState } from "react";
import Toggle from "./Toggle";
import Profile from "./Profile";
import Button from "./Button";
import ProfileEl from "./ProfileEl";
//daje tu komentarz, żeby było co commitować//

function Main() {
  const [imExist, setImExist] = useState(false);
  const [imHuman, setImHuman] = useState(false);
  const [man, setMan] = useState(false);
  const [woman, setWoman] = useState(false);
  const [prettierThanAgata, setImPrettierThanAgata] = useState(false);
  const [megaWaz, setMegaWaz] = useState(false);
  const [nonBinary, setNonBinary] = useState(false);
  const [inteligent, setInteligent] = useState(false);
  const [left, setLeft] = useState(false);
  const [snap, setSnap] = useState(false);
  const [madePage, setMadePage] = useState(false);
  const [lol, setLol] = useState(false);
  const [autism, setAutism] = useState(false);
  const [girl, setGirl] = useState(false);
  const [sigma, setSigma] = useState(false);
  const [gay, setGay] = useState(false);
  const [lesbian, setLesbian] = useState(false);
  const [kid, setKid] = useState(false);
  const [fortnite, setFortnite] = useState(false);
  const [cheat, setCheat] = useState(false);
  const [kidGirl, setKidGirl] = useState(false);
  const [pedo, setPedo] = useState(false);
  const [boy, setBoy] = useState(false);
  const [kidBoyfriend, setKidBoyfriend] = useState(false);
  const [profile, setProfile] = useState(false);

  const toggleState = (
    state: boolean,
    setState: any,
    object: boolean,
    switchStateTrue: () => void,
    switchStateFalse: () => void
  ) => {
    if (!state) {
      setState(true);
    } else {
      setState(false);
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
            state={imExist}
            change={() => {
              toggleState(
                imExist,
                setImExist,
                imExist,
                () => {
                  setImPrettierThanAgata(false);
                },
                () => {
                  setMegaWaz(false);
                  setMadePage(false);
                }
              );
            }}
          />

          <Toggle
            text="I'm Human"
            state={imHuman}
            change={() => {
              toggleState(
                imHuman,
                setImHuman,
                imHuman,
                () => {
                  setMegaWaz(false);
                  setNonBinary(false);
                },
                () => {
                  setMadePage(false);
                  setMan(false);
                  setWoman(false);
                }
              );
            }}
          />

          <Toggle
            text="I'm Man"
            state={man}
            change={() => {
              toggleState(
                man,
                setMan,
                man,
                () => {
                  setWoman(false);
                  setNonBinary(false);
                  setLesbian(false);
                  if (lol) {
                    setGay(true);
                    setGirl(false);
                    setKidGirl(false);
                  }
                  if (boy) {
                    setGay(true);
                  }
                  setImHuman(true);
                },
                () => {
                  setMadePage(false);
                  setGay(false);
                }
              );
            }}
          />

          <Toggle
            text="I'm Woman"
            state={woman}
            change={() => {
              toggleState(
                woman,
                setWoman,
                woman,
                () => {
                  setMan(false);
                  setNonBinary(false);
                  setMadePage(false);
                  setGay(false);
                  if (girl) {
                    setLesbian(true);
                    setImHuman(true);
                  }
                },
                () => {
                  setLesbian(false);
                }
              );
            }}
          />
          <Toggle
            text="I'm Intelligent"
            state={inteligent}
            change={() => {
              toggleState(
                inteligent,
                setInteligent,
                inteligent,
                () => {
                  setLeft(false);
                  setSnap(false);
                  setLol(false);
                },
                () => {
                  setMadePage(false);
                  setSigma(false);
                }
              );
            }}
          />
          <Toggle
            text="I'm non-binary"
            state={nonBinary}
            change={() => {
              toggleState(
                nonBinary,
                setNonBinary,
                nonBinary,
                () => {
                  setImHuman(false);
                  setMan(false);
                  setWoman(false);
                  setMadePage(false);
                  setGay(false);
                },
                () => {}
              );
            }}
          />

          <Toggle
            text="I'm Kid"
            state={kid}
            change={() => {
              toggleState(
                kid,
                setKid,
                kid,
                () => {
                  if (girl) {
                    setKidGirl(true);
                  }
                  setPedo(false);
                  if (boy) {
                    setKidBoyfriend(true);
                  }
                  setMadePage(false);
                },
                () => {
                  setFortnite(false);
                  if (kidGirl) {
                    setPedo(true);
                  }
                  if (kidBoyfriend) {
                    setPedo(true);
                  }
                }
              );
            }}
          />
          <Toggle
            text="I have boyfriend"
            state={boy}
            change={() => {
              toggleState(
                boy,
                setBoy,
                boy,
                () => {
                  if (man) {
                    setGay(true);
                    setSigma(false);
                  }
                  setGirl(false);
                  setKidGirl(false);
                  if (kid) {
                    setKidBoyfriend(true);
                  }
                  setMadePage(false);
                },
                () => {
                  setKidBoyfriend(false);
                }
              );
            }}
          />
        </div>
        <div className="flex items-start justify-center w-80 gap-10 flex-col">
          <Toggle
            text="I have a girlfriend"
            state={girl}
            change={() => {
              toggleState(
                girl,
                setGirl,
                girl,
                () => {
                  setLol(false);
                  if (woman) {
                    setLesbian(true);
                  }
                  setMadePage(false);
                  if (kid) {
                    setKidGirl(true);
                  }
                  setBoy(false);
                  setKidBoyfriend(false);
                  if (!woman) {
                    setLol(false);
                  }
                },
                () => {
                  setKidGirl(false);
                }
              );
            }}
          />
          <Toggle
            text="My boyfriend is under 13"
            state={kidBoyfriend}
            change={() => {
              toggleState(
                kidBoyfriend,
                setKidBoyfriend,
                kidBoyfriend,
                () => {
                  setBoy(true),
                    setKid(true),
                    setMadePage(false),
                    setGirl(false),
                    setKidGirl(false);
                  if (man) {
                    setGay(true);
                  }
                },
                () => {
                  setBoy(false);
                  setKid(false);
                  setPedo(false);
                }
              );
            }}
          />
          <Toggle
            text="My girlfriend is under 13"
            state={kidGirl}
            change={() => {
              toggleState(
                kidGirl,
                setKidGirl,
                kidGirl,
                () => {
                  setGirl(true);
                  setKid(true);
                  setPedo(false);
                  setBoy(false);
                  setKidBoyfriend(false);
                  setMadePage(false);
                  if (!woman) {
                    setLol(false);
                  }
                  if (woman) {
                    setLesbian(true);
                  }
                },
                () => {
                  setGirl(false);
                  setKid(false);
                }
              );
            }}
          />
          <Toggle
            text="I vote for the left"
            state={left}
            change={() => {
              toggleState(
                left,
                setLeft,
                left,
                () => {
                  setInteligent(false);
                  setMadePage(false);
                  setSigma(false);
                },
                () => {}
              );
            }}
          />
          <Toggle
            text="I'm Sigma"
            state={sigma}
            change={() => {
              toggleState(
                sigma,
                setSigma,
                sigma,
                () => {
                  setLol(false);
                  setLeft(false), setInteligent(true);
                  setSnap(false);
                  setGay(false);
                  setPedo(false);
                },
                () => {
                  setMadePage(false);
                }
              );
            }}
          />
          <Toggle
            text="I'm Gay"
            state={gay}
            change={() => {
              toggleState(
                gay,
                setGay,
                gay,
                () => {
                  setSigma(false),
                    setMadePage(false),
                    setMan(true),
                    setWoman(false);
                  setNonBinary(false);
                  setLesbian(false);
                  setImHuman(true);
                },
                () => {
                  setLol(false);
                  setBoy(false);
                  setKidBoyfriend(false);
                }
              );
            }}
          />
          <Toggle
            text="I'm Lesbian"
            state={lesbian}
            change={() => {
              toggleState(
                lesbian,
                setLesbian,
                lesbian,
                () => {
                  setWoman(true), setMan(false), setGay(false), setSigma(false);
                  setNonBinary(false), setMadePage(false), setImHuman(true);
                },
                () => {
                  if (woman && girl) {
                    setGirl(false);
                  }
                }
              );
            }}
          />
          <Toggle
            text="I'm prettier than Agata"
            change={() =>
              toggleState(
                prettierThanAgata,
                setImPrettierThanAgata,
                prettierThanAgata,
                () => {
                  setImExist(false);
                  setMegaWaz(false);
                  setMadePage(false);
                },
                () => {}
              )
            }
            state={prettierThanAgata}
          />
        </div>
        <div className="flex items-start justify-center w-80 gap-10 flex-col">
          <Toggle
            text="I have autism"
            state={autism}
            change={() =>
              toggleState(
                autism,
                setAutism,
                autism,
                () => {
                  setMadePage(false);
                },
                () => {
                  setLol(false);
                }
              )
            }
          />
          <Toggle
            text="I'm Mega Wąż 9"
            state={megaWaz}
            change={() =>
              toggleState(
                megaWaz,
                setMegaWaz,
                megaWaz,
                () => {
                  setImExist(true),
                    setImHuman(false),
                    setImPrettierThanAgata(false);
                  setMadePage(false);
                },
                () => {}
              )
            }
          />
          <Toggle
            text="I use snapchat"
            state={snap}
            change={() => {
              toggleState(
                snap,
                setSnap,
                snap,
                () => {
                  setInteligent(false);
                  setMadePage(false);
                  setSigma(false);
                },
                () => {}
              );
            }}
          />
          <Toggle
            text="I made this page"
            state={madePage}
            change={() => {
              toggleState(
                madePage,
                setMadePage,
                madePage,
                () => {
                  setInteligent(true),
                    setImHuman(true),
                    setMan(true),
                    setImExist(true);
                  setWoman(false);
                  setSnap(false);
                  setMegaWaz(false);
                  setNonBinary(false);
                  setImPrettierThanAgata(false);
                  setLeft(false);
                  setGirl(true);
                  setLol(false);
                  setAutism(false);
                  setSigma(true);
                  setGay(false);
                  setKid(false);
                  setFortnite(false);
                  <div>Profile</div>;
                  setKidGirl(false);
                  setPedo(false);
                  setBoy(false);
                  setKidBoyfriend(false);
                  setLesbian(false);
                },
                () => {}
              );
            }}
          />
          <Toggle
            text="I play League of Legends"
            state={lol}
            change={() => {
              toggleState(
                lol,
                setLol,
                lol,
                () => {
                  setInteligent(false),
                    setAutism(true),
                    setMadePage(false),
                    setSigma(false);
                  if (!woman) {
                    setGirl(false);
                    setKidGirl(false);
                  }
                  if (man) {
                    setGay(true);
                  }
                },
                () => {}
              );
            }}
          />
          <Toggle
            text="I play Fortnite"
            state={fortnite}
            change={() => {
              toggleState(
                fortnite,
                setFortnite,
                fortnite,
                () => {
                  setKid(true);
                  if (girl) {
                    setKidGirl(true);
                  }
                  setPedo(false);
                  if (boy) {
                    setKidBoyfriend(true);
                  }
                  setMadePage(false);
                },
                () => {}
              );
            }}
          />
          <Toggle
            text="I'm Pedofile"
            state={pedo}
            change={() =>
              toggleState(
                pedo,
                setPedo,
                pedo,
                () => {
                  setSigma(false);
                  setMadePage(false);
                  setKid(false);
                  setFortnite(false);
                },
                () => {
                  setKidGirl(false);
                  setKidBoyfriend(false);
                }
              )
            }
          />

          <Toggle
            text="I can cheat toggle game"
            state={cheat}
            change={() => {
              setCheat(false);
            }}
          />
        </div>
      </div>
      {profile && (
        <Profile
          text={
            <div className="flex items-start justify-center flex-col">
              {!imExist && <ProfileEl text="You don't Exist" />}
              {!imHuman && <ProfileEl text="You are not Human" />}

              {megaWaz && <ProfileEl text="You are Mega Wąż 9" />}
              {kid && <ProfileEl text="You are a Kid" />}
              {nonBinary && <ProfileEl text="You are Non-binary" />}
              {man && <ProfileEl text="You are Man" />}
              {gay && <ProfileEl text="You are Gay" />}
              {woman && <ProfileEl text="You are Woman" />}
              {lesbian && <ProfileEl text="You are Lesbian" />}
              {inteligent ? (
                <ProfileEl text="You are Intelligent" />
              ) : (
                <ProfileEl text="You are not Intelligent" />
              )}

              {autism && <ProfileEl text="You have autism" />}
              {boy && !kidBoyfriend && <ProfileEl text="You have boyfriend" />}
              {boy && kidBoyfriend && (
                <ProfileEl text="Your boyfriend is under 13" />
              )}
              {girl && !kidGirl && <ProfileEl text="You have girlfriend" />}
              {girl && kidGirl && (
                <ProfileEl text="Your girlfriend is under 13" />
              )}
              {left && <ProfileEl text="You are Lefist" />}

              {snap && <ProfileEl text="You use Snapchat" />}

              {lol && <ProfileEl text="You play League of Legends" />}
              {fortnite && <ProfileEl text="You play Fortnite" />}

              {pedo && <ProfileEl text="You are Pedofile" />}
              {sigma && <ProfileEl text="You are Sigma" />}
              {madePage && <ProfileEl text="You are Franciszek Saja" />}
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
          setImExist(false),
            setImHuman(false),
            setMan(false),
            setWoman(false),
            setInteligent(false),
            setNonBinary(false),
            setKid(false),
            setBoy(false),
            setGirl(false),
            setKidBoyfriend(false),
            setKidGirl(false),
            setLeft(false),
            setSigma(false),
            setGay(false),
            setLesbian(false),
            setImPrettierThanAgata(false),
            setAutism(false),
            setMegaWaz(false),
            setSnap(false),
            setMadePage(false),
            setLol(false),
            setFortnite(false),
            setPedo(false);
        }}
        text="Disable all"
      />
    </div>
  );
}

export default Main;
