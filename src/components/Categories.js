import React from "react";

const Categories = ({ name }) => {
  return (
    <div className="m-2">
      <button className="bg-gray-400 rounded-2xl p-1 px-4 w-fit text-nowrap border-2">{name}</button>
    </div>
  );
};

export default Categories;
