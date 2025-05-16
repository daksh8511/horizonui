import React, { useState } from "react";
import ToggleBtn from "../ToggleBtn/ToggleBtn";

const Notification = () => {
  

  return (
    <div className="p-4 rounded-2xl bg-white shadow-md">
      <h2 className="font-bold text-lg text-[var(--blue-color)] mb-2">
        Notification
      </h2>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ToggleBtn />
          <h4 className="text-[var(--blue-color)] font-bold text-sm">Item update notifications</h4>
        </div>
        <div className="flex items-center gap-2">
          <ToggleBtn />
          <h4 className="text-[var(--blue-color)] font-bold text-sm">Item comment notifications</h4>
        </div>
        <div className="flex items-center gap-2">
          <ToggleBtn />
          <h4 className="text-[var(--blue-color)] font-bold text-sm">Item comment notifications</h4>
        </div>
        <div className="flex items-center gap-2">
          <ToggleBtn />
          <h4 className="text-[var(--blue-color)] font-bold text-sm">Item update notifications</h4>
        </div>
        <div className="flex items-center gap-2">
          <ToggleBtn />
          <h4 className="text-[var(--blue-color)] font-bold text-sm">Item comment notifications</h4>
        </div>
        <div className="flex items-center gap-2">
          <ToggleBtn />
          <h4 className="text-[var(--blue-color)] font-bold text-sm">Item comment notifications</h4>
        </div>
      </div>
    </div>
  );
};

export default Notification;
