import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import QuestionForm from "./Form";


const QuestionModal = ({ create }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex md:flex-col justify-center items-center mt-10 ">
      <div className="flex gap-5 ">
        <button
          className="bg-red-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add your question here <AiFillFire className="text-xl" />
        </button>
      </div>
      {showModal ? (
        <div className="fixed bg-opacity-100 bg-white inset-x-1/4 top-8 rounded-lg shadow-xl p-2">
          <div className="text-base mt-1 mx-1 text-slate-600 font-semibold text-center">
            <QuestionForm className='mx-auto' create={create} close={setShowModal} />
          </div>
          <button
            className="my-1 block w-auto mx-auto px-8 h-10 bg-red-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
            close
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionModal;

