import React, { useState } from "react";
import { app } from "../config/firebaseConfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const Login = () => {
  const [data, setData] = useState({});
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  let githubProvider = new GithubAuthProvider();

  const handleSubmit = () => {
    console.log(data);
    createUserWithEmailAndPassword(auth,data.email,data.pass)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSubmitWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const HandleSubmitWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((res) => {
      const credential = GithubAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;

      const user = res.user;
    }).catch((error)=>{
          // Handle Errors here.
          alert(error.message);
    })
  };

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });
  };

  return (
    <div className="">
      <h1 className="text-2xl text-center text-white  ">Auth using google,github...</h1>
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
          Submit
        </button>
        <div className="flex justify-center flex-row items-center mt-6 h-[50px]  space-x-4">
          <h1 className="text-lg font-serif text-white">Sign Up With</h1>
          <button onClick={() => handleSubmitWithGoogle()}>
            <div className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-slate-200">
              <FcGoogle size={28} />{" "}
            </div>
          </button>
          <button onClick={() => HandleSubmitWithGithub()}>
            <div className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-slate-200">
              <BsGithub size={28} />{" "}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
