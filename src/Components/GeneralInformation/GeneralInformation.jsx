import React from "react";

const GeneralInformation = () => {
  return (
    <div className="bg-white rounded-2xl p-2">
      <h2 className="font-bold text-lg text-[var(--blue-color)]">
        General Information
      </h2>
      <p className="text-sm text-gray-400 my-4">
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="shadow-lg p-2 rounded-2xl">
          <h2 className="text-sm text-gray-400 font-bold">Education</h2>
          <span className="text-sm font-bold text-[var(--blue-color)]">Standford University</span>
        </div>
        <div className="shadow-lg p-2 rounded-2xl">
          <h2 className="text-sm text-gray-400 font-bold">Language</h2>
          <span className="text-sm font-bold text-[var(--blue-color)]">English, Spanish, Italian</span>
        </div>
        <div className="shadow-lg p-2 rounded-2xl">
          <h2 className="text-sm text-gray-400 font-bold">Department</h2>
          <span className="text-sm font-bold text-[var(--blue-color)]">Product Design</span>
        </div>
        <div className="shadow-lg p-2 rounded-2xl">
          <h2 className="text-sm text-gray-400 font-bold">Work History</h2>
          <span className="text-sm font-bold text-[var(--blue-color)]">Google, Facebook</span>
        </div>
        <div className="shadow-lg p-2 rounded-2xl">
          <h2 className="text-sm text-gray-400 font-bold">Organization</h2>
          <span className="text-sm font-bold text-[var(--blue-color)]">Simmple Web LLC</span>
        </div>
        <div className="shadow-lg p-2 rounded-2xl">
          <h2 className="text-sm text-gray-400 font-bold">Birthday</h2>
          <span className="text-sm font-bold text-[var(--blue-color)]">20 July, 1986</span>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
