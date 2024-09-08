import React from "react";
import { useEffect } from "react";
import { YOUTUBE_API_KEY } from "../utils/constant";
import CommentCard from "./CommentCard";
import NLevelComments from "./NLevelComments";

const CommentsContainer = ({ id }) => {
  const [comments, setComments] = React.useState([]);
  const getData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();

    setComments(json.items);
  };

  useEffect(() => {
    getData();
  }, []);

  if (comments.length === 0) return;
  return (
    <div className="mt-4 ">
      <h1 className="text-2xl font-thin font-serif">Comments</h1>
      {/* <NLevelComments /> */}
      {comments?.map((comment) => (
        <CommentCard commentInfo={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentsContainer;
