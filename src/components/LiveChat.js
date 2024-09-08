import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomNames, quoteGenerator } from "../utils/Helper";
import SubmitButton from "./common/SubmitButton";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomNames(),
          message: quoteGenerator(),
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[450px] w-full p-2 ml-5 mr-2 border-2 border-gray shadow-2xl rounded-md">
      {/* Chat messages container with overflow scroll */}
      <div className="flex-1 overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map((chat, index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index} />
        ))}
      </div>
      {/* Input box fixed at the bottom */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.length !== 0)
            dispatch(
              addMessages({
                name: "Prasham",
                message: liveMessage,
              })
            );
          setLiveMessage("");
        }}
        className="mt-2 flex"
      >
        <input
          type="text"
          placeholder="Add Chat..."
          className="mx-2 p-2 w-3/4 border-2 rounded-md"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default LiveChat;
