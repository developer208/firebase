import React from "react";

const Hosting = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center text-white mb-5  ">
        Firebase Hosting
      </h1>
      <div className="text-center w-[350px] min-h-[300px]  flex items-start flex-col mx-auto  mb-10">
        <h1 className="text-xl text-white">Steps :-</h1>
        <li className="text-[#bde064]">
          install firebase tools npm i -g firebase-tools
        </li>
        <li className="text-[#bde064]">create build npm run build</li>
        <li className="text-[#bde064]">login firebase - firebase login:ci</li>
        <li className="text-[#bde064]">initialize project - firebase init</li>
        <li className="text-[#bde064]">want to proceed (yes)</li>
        <li className="text-[#bde064]">select option hosting</li>
        <li className="text-[#bde064]">public directory build</li>
        <li className="text-[#bde064]">single-page-app ? yes</li>
        <li className="text-[#bde064]">deploy with github ? no</li>
        <li className="text-[#bde064]">Overwrite ? no</li>
        <li className="text-[#bde064]">command - firebase deploy </li>
      </div>
    </div>
  );
};

export default Hosting;
