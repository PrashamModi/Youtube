import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSwitch } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchVideo from "./WatchVideo";
import VideoSuggestions from "./VideoSuggestions";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeSwitch());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex mt-5">
      <div className="ml-20">
        <WatchVideo id={searchParams.get("v")} />
        <CommentsContainer id={searchParams.get("v")} />
      </div>
      <VideoSuggestions />
    </div>
  );
};

export default WatchPage;
