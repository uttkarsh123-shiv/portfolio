import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

Modal.setAppElement('#root'); // for accessibility

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-between items-center h-[10vh] p-3 sm:p-5 sm:pr-20 pt-4 sm:pt-6 md:pt-10">
        <h1 className="instrument-serif-regular text-[16px] sm:text-2xl leading-7 pl-1 sm:pl-10">
          @byuttkarsh
        </h1>

        <div className="button-grp gap-2 sm:gap-5 flex">
          <button
            className="sm:p-2 pt-1 pb-1 pl-3 sm:pl-6 pr-3 sm:pr-6 border rounded-full md:border-dotted border-gray-500 cursor-pointer text-[11px] sm:text-[13px]"
            onClick={() => setModalIsOpen(true)}
          >
            RESUME
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "mailto:uttkarshsingh450@gmail.com?subject=Collaboration Request")
            }
            className="sm:p-2 pl-3 sm:pl-6 pr-3 sm:pr-6 pt-1 pb-1 border rounded-full md:border-dotted border-gray-500 cursor-pointer text-[11px] sm:text-[13px]"
          >
            CONNECT
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(2px)",
            zIndex: 1000,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            // marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "55%",
            height: "95%",
            padding: "0",
            border: "none",
            borderRadius: "10px",
            overflow: "hidden",
          },
        }}
      >
        <div className="w-full h-full relative bg-white rounded-lg">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-black z-10"
          >
            <AiOutlineClose size={24} />
          </button>

          <iframe
            src="https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/preview"
            width="100%"
            height="100%"
            // allow="autoplay"
            title="Resume PDF"
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
