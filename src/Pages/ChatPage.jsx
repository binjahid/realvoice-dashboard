/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import {
  ChannelContainer,
  ChannelListContainer,
  StreamAuth,
} from "../components/ChatContainer";
import Header from "../Shared/Header";
import SmNavbar from "../Shared/SmNavbar";
import TopBar from "../Shared/TopBar";
import "stream-chat-react/dist/css/index.css";
import "./ChatPage.css";

const cookies = new Cookies();
const apiKey = "r3kc4caxat7k";
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

client.connectUser(
  {
    id: "jahid",
    name: "jahidislam",
    fullName: "jahidIslam",
    email: "jahid78784@gmail.com",
    image: "",
    hashedPassword: "fwihjfweuihjfwijefiwojfijefwihfwhnvfw",
    phoneNumber: "01700000000",
  },
  client.devToken("jahid")
);

// console.log(client.user);

const ChatPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div
        className={`body-container ${
          dark ? "bg-[#1c1f2e] theme-dark" : "bg-white theme-light"
        } relative pb-20 sm:pb-0 flex`}
      >
        <Header />
        <main
          className={`w-full sm:ml-[90px] ${
            dark ? "bg-[#1c1f2e]" : "bg-white"
          }`}
        >
          <section className="app__wrapper h-screen">
            <Chat client={client} theme="team dark">
              <ChannelListContainer
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType}
                setIsEditing={setIsEditing}
              />
              <ChannelContainer
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                createType={createType}
              />
            </Chat>
          </section>
        </main>
        <div className="fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t">
          <SmNavbar />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
