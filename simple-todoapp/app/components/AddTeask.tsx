import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddTeask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new Task <AiOutlinePlus className="ml-2" size={18} />{" "}
      </button>
    </div>
  );
};

export default AddTeask;
