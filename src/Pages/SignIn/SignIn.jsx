import React from "react";
import styled from "styled-components";

import bg from "/assets/bg_5.4.png";
import google from "/assets/google.png";

import horizon_logo from "/assets/horizon_logo.png";

const SignIn = () => {
  return (
    <div className="h-screen min-md:flex">
      <div className="min-md:w-2/4 p-3 min-md:p-0 flex flex-col m-auto items-center justify-center">
        <h2 className="text-4xl font-semibold text-[var(--blue-color)]">
          Sign In
        </h2>
        <span className="mt-2 mb-9">
          Enter your email and password to sign in!
        </span>
        <div className="flex items-center gap-2 bg-gray-200 px-10 py-2 rounded mb-6 cursor-pointer">
          <img src={google} alt="" className="w-5" />
          <span className="font-semibold text-sm text-[var(--blue-color)]">
            Sign in with Google
          </span>
        </div>
        <span className="text-sm text-gray-400 mb-6">Or</span>

        <form action="">
          <div className="mb-2">
            <label htmlFor="" className="block">
              Email*
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full p-2 border-gray-200 rounded outline-0 text-gray-400 mt-2"
            />
          </div>
          <div>
            <label htmlFor="" className="block">
              Password*
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full p-2 border-gray-200 rounded outline-0 text-gray-400 mt-2"
            />
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 ">
              <input type="checkbox" />
              <span className="text-xs">Keep Me Logged In</span>
            </div>
            <span className="text-sm cursor-pointer">Forgot Password?</span>
          </div>
          <button className="bg-[#4318FF] w-full my-3 p-2 text-white rounded font-bold cursor-pointer">
            Sign In
          </button>
        </form>
        <h3 className="text-xs">
          Not Registered yet?{" "}
          <span className="text-[#4318FF] cursor-pointer font-bold">
            Create an account
          </span>
        </h3>
      </div>
      <Wrapper className="w-2/4 hidden min-md:items-center min-md:justify-center min-md:flex">
        <img src={horizon_logo} alt="" />
      </Wrapper>
    </div>
  );
};

export default SignIn;

const Wrapper = styled.div`
  background: url(${bg});
  background-size: cover;
  border-bottom-left-radius: 150px;
`;
