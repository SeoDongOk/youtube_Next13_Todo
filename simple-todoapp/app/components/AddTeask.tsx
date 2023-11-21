"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

const AddTeask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  if (modalOpen) {
    console.log(modalOpen);
  } else {
    console.log("error");
  }
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new Task <AiOutlinePlus className="ml-2" size={18} />{" "}
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default AddTeask;
