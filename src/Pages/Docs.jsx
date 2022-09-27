import {
  useMantineColorScheme,
  ScrollArea,
  Navbar,
  createStyles,
} from "@mantine/core";

import { IconSmartHome, IconFolders, IconUsers } from "@tabler/icons";

import React from "react";
import ExpendAbleButton from "../components/ExpendAbleButton";
import NonExpendAbleButton from "../components/NonExpendAbleButton";
import Header from "../Shared/Header";
import Select from "../Shared/Select";
import TopBar from "../Shared/TopBar";

const Docs = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const itemsData = [
    {
      label: "My Spaces",
      icon: IconFolders,
      links: [
        { label: "Upcoming releases", link: "/" },
        { label: "Previous releases", link: "/" },
        { label: "Releases schedule", link: "/" },
      ],
    },
    {
      label: "Shared With Me",
      icon: IconUsers,
      links: [
        { label: "In Inbox", link: "/" },
        { label: "In Progress", link: "/" },
        { label: "Completed", link: "/" },
      ],
    },
  ];

  const actions = ["Upload", "Create", "Share"];

  return (
    <>
      <div
        className={`body-container ${
          dark ? "bg-[#1c1f2e] theme-dark" : "bg-white theme-light"
        } relative sm:pb-0 flex`}
      >
        <Header />
        <main className={`w-full sm:ml-[90px]`}>
          <TopBar />
          <section className="flex w-full h-screen pb-[80px] sm:pb-0 pt-[82px] md:flex-nowrap flex-wrap">
            <div
              className={`
            p-4 sm:p-8 h-full ${!dark && "bg-[#F5F6F8]"}
            `}
            >
              <div className="w-[17rem] mx-auto">
                <div>
                  <NonExpendAbleButton
                    icon={IconSmartHome}
                    label="Home"
                    link={"/docs"}
                  />
                  {itemsData.map((item, index) => (
                    <ExpendAbleButton key={index} itemData={item} />
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`p-4 sm:pt-8 w-full
                sm:border-l ${
                  dark ? "border-[#3f445d]" : "zoomla-border-clr-light"
                }
            `}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl">Home</h2>
                <div className="w-[10rem]">
                  <Select data={actions} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Docs;
