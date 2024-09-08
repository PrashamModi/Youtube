import React from "react";

const commentData = [
  {
    name: "Prasham Modi",
    text: "This is implementing n level comments",
    replies: [
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [
              {
                name: "Prasham Modi",
                text: "This is implementing n level comments",
                replies: [
                  {
                    name: "Prasham Modi",
                    text: "This is implementing n level comments",
                    replies: [],
                  },
                  {
                    name: "Prasham Modi",
                    text: "This is implementing n level comments",
                    replies: [],
                  },
                ],
              },
              {
                name: "Prasham Modi",
                text: "This is implementing n level comments",
                replies: [],
              },
            ],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Prasham Modi",
    text: "This is implementing n level comments",
    replies: [
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Prasham Modi",
    text: "This is implementing n level comments",
    replies: [
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
      {
        name: "Prasham Modi",
        text: "This is implementing n level comments",
        replies: [
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
          {
            name: "Prasham Modi",
            text: "This is implementing n level comments",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment data={comment} key={index} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
        className="h-12 w-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const NLevelComments = () => {
  return (
    <div className="m-5 p-2">
      <CommentsList comments={commentData} />
    </div>
  );
};

export default NLevelComments;
