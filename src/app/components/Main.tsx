"use client";
import React, { useState } from "react";
import Toggle from "./Toggle";
import Profile from "./Profile";
import Button from "./Button";
import ProfileEl from "./ProfileEl";
import { useTogglePerson } from "../hooks/useTogglePerson";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { toggleConfig, person, disableAll } = useTogglePerson();

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
              disableAll();
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
                <Toggle
                  text={el.name}
                  isEnabled={el.stateKey}
                  change={el.action}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
