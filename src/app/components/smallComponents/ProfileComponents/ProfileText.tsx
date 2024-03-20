import React from "react";
import Profile from "./Profile";
import ProfileEl from "../../ProfileEl";
import { usePerson } from "@/app/hooks/usePerson";

interface ProfileProps {
  modal: boolean;
  setModal: any;
}

function ModalWindowProfileText({ modal, setModal }: ProfileProps) {
  const { person } = usePerson();

  return (
    <>
      {modal && (
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
              {person.madePage && <ProfileEl text="You are Franciszek Saja" />}
            </div>
          }
          exit={() => {
            setModal(false);
          }}
        />
      )}
    </>
  );
}

export default ModalWindowProfileText;
