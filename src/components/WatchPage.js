import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSwitch } from "../utils/appSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import WatchVideo from "./WatchVideo";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import ChannelDetails from "./ChannelDetails";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const video = location.state || {};

  useEffect(() => {
    dispatch(closeSwitch());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex mt-5 w-full">
      <div className="ml-20 mr-8">
        <WatchVideo id={searchParams.get("v")} />
        <ChannelDetails item={video} id={searchParams.get("v")} />
        <CommentsContainer id={searchParams.get("v")} />
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
