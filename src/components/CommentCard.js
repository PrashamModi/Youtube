import React from "react";
import { timeAgo, formatCount } from "../utils/Helper";
import Like from "./Like";
import { USER_PNG } from "../utils/constant";

const CommentCard = ({ commentInfo }) => {
  return (
    <div className="flex m-2 p-2 mb-3 shadow-lg rounded-2xl h-2/5 mt-8">
      <div>
        <img
          className="rounded-full cursor-pointer"
          src={
            commentInfo.snippet.topLevelComment.snippet.authorProfileImageUrl
              ? commentInfo.snippet.topLevelComment.snippet
                  .authorProfileImageUrl
              : USER_PNG
          }
          alt="profile-img"
        />
      </div>
      <div className="ml-4">
        <div className="flex">
          <h1 className="font-bold cursor-pointer">
            {commentInfo.snippet.topLevelComment.snippet.authorDisplayName}
          </h1>
          <h2 className="ml-3 font-light">
            {timeAgo(commentInfo.snippet.topLevelComment.snippet.updatedAt)}
          </h2>
        </div>
        <h1 className="font-semibold">
          {commentInfo.snippet.topLevelComment.snippet.textOriginal}
        </h1>
        <div className="flex items-center">
          <Like />
          <h1 className="ml-2">
            {formatCount(commentInfo.snippet.topLevelComment.snippet.likeCount)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
