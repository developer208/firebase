import React, { useState } from "react";
import { app, storage } from "../config/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Storage = () => {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    const storageRef = ref(storage, `assets/${data.name}`);
    const uploadTask = uploadBytesResumable(storageRef, data);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log("upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div className="min-h-[400px] mt-8 w-[100%]">
      <h1 className="text-2xl text-center text-white  ">Firebase Storage...</h1>
      <div className="text-center w-[350px] min-h-[300px] justify-center flex flex-col mx-auto  mb-10">
        <div>
          <div className="flex  my-[20px]">
            <input
              type="file"
              className="box-border border border-gray-300 pl-2 w-[60%] mx-auto text-black"
              onChange={(e) => setData(e.target.files[0])}
            />
          </div>
        </div>

        <button
          onClick={() => handleSubmit()}
          className="p-2 rounded-2xl mt-5  w-[120px] bg-slate-200 mx-auto"
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Storage;
