import React, { useEffect, useState } from "react";
import { app, database } from "../config/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,where
} from "firebase/firestore";

const Firestore = () => {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");
  const emailQuery=query(collectionRef,where("email","==","vedangmule208@gmail.com"));

  //add data info firestore
  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: data.email,
      password: data.pass,
    })
      .then(() => {
        alert("data added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //get data from firestore
  const getData = () => {
    getDocs(collectionRef).then((res) => {
      console.log(
        res.docs.map((item, key) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  //update data
  const updateData = () => {
    const docToUpdate = doc(database, "users", "KTxvKsz7DWEAHMnBwPud");
    updateDoc(docToUpdate, {
      email: data.email,
      password: data.pass,
    })
      .then(() => {
        alert("data updated");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //update data
  const deleteData = () => {
    const docToDelete = doc(database, "users", "KTxvKsz7DWEAHMnBwPud");
    deleteDoc(docToDelete)
      .then(() => {
        alert("data Deleted");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //realtime Updates

  const realTime = () => {
    onSnapshot(collectionRef, (data) => {
      console.log(
        data.docs.map((item) => {
          return item.data();
        })
      );
    });
  };

  //query

  const firebaseQuery=()=>{
    onSnapshot(emailQuery, (data) => {
      console.log(
        data.docs.map((item) => {
          return item.data();
        })
      );
    });
  }

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });
  };

  useEffect(()=>{
    realTime();
  },[]);

  return (
    <div className="min-h-[400px]  w-[100%]">
      <h1 className="text-2xl text-center text-white  ">
        Firestore crud-operations...
      </h1>
      <div className="text-center w-[350px] min-h-[300px] justify-center flex flex-col mx-auto  mb-10">
        <div>
          <div className="flex  my-[20px]">
            <label typeof="text" className="text-white ml-7  font-bold ">
              Email :
            </label>
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              className="box-border border-2 border-gray-300 pl-2 w-[60%] ml-3 text-black"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <div className="flex ">
              <label typeof="text" className=" font-bold text-white">
                Password :
              </label>
              <input
                type="password"
                name="pass"
                className="box-border pl-2 w-[60%] mb-3 ml-3 border-2 border-gray-300 text-black"
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => handleSubmit()}
          className="p-2 rounded-2xl mt-5  w-[120px] bg-slate-200 mx-auto"
        >
          Insert
        </button>
        <button
          onClick={() => getData()}
          className="p-2 rounded-2xl mt-5  w-[120px] bg-slate-200 mx-auto"
        >
          Get Data
        </button>
        <button
          onClick={() => updateData()}
          className="p-2 rounded-2xl mt-5  w-[120px] bg-slate-200 mx-auto"
        >
          Update
        </button>
        <button
          onClick={() => deleteData()}
          className="p-2 rounded-2xl mt-5  w-[120px] bg-slate-200 mx-auto"
        >
          Delete
        </button>
        <button
          onClick={() => realTime()}
          className="p-2 rounded-2xl mt-5  w-[120px] bg-slate-200 mx-auto"
        >
          Realtime Update
        </button>
        <button
          onClick={() => firebaseQuery()}
          className="p-2 rounded-2xl mt-5  w-[120px] bg-slate-200 mx-auto"
        >
          Firebase Query
        </button>
        {/* <div className="min-h-[100px] w-[350px] bg-white my-3 ">
        </div> */}
      </div>
    </div>
  );
};

export default Firestore;
