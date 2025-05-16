import React from "react";

import icon from "/assets/fingerprint.png";

const Safety = () => {
  return (
    <div className="p-2 bg-white rounded-2xl">
      <img src={icon} alt="" />
      <h2 className="text-2xl font-bold text-[var(--blue-color)] my-2">Control card security in-app with a tap</h2>
      <span className="text-sm text-gray-400">Discover our cards benefits, with one tap.</span>
      <button className="w-full bg-[#4318ff] text-center p-2 text-white capitalize rounded-2xl mt-10">
        cards
      </button>
    </div>
  );
};

export default Safety;
