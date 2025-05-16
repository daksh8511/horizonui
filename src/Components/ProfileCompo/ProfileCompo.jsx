import React from "react";

import bg_image from "/public/assets/bg_image.png";
import avatar from "/assets/avatar.png";

const ProfileCompo = () => {
  return (
    <div className="bg-white rounded-2xl p-2">
      <div>
        <img src={bg_image} alt="" className="h-full w-full" />
        <img
          src={avatar}
          className="text-center flex justify-center m-auto -translate-y-10"
          alt=""
        />
      </div>
      <div>
        <div className="block text-center mb-4">
          <h3 className="text-lg font-bold text-[var(--blue-color)]">
            Adela Parkson
          </h3>
          <span className="text-sm text-gray-400">Product Designer</span>
        </div>
        <div className="flex justify-around">
          <div className="text-center">
            <h4 className="text-sm font-bold text-[var(--blue-color)]">17</h4>
            <span className="text-sm text-gray-400">Posts</span>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-[var(--blue-color)]">9.7k</h4>
            <span className="text-sm text-gray-400">Followers</span>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-[var(--blue-color)]">274</h4>
            <span className="text-sm text-gray-400">Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompo;
