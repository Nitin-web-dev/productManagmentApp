import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {registerUser, loginUser} from "../api/authApi.js";
export default function Login() {
  // State to track whether 'login' or 'signup' is selected
  const [activeTab, setActiveTab] = useState("login");
  const {
    register: registerlogin,
    handleSubmit:handleSubmitlogin,
    formState: {errors: loginErrors}

  } = useForm();

  const {
    register: registersignup,
    handleSubmit: handleSubmitsignup,
    formState: {errors: signupErrors}

  } = useForm();

  const onLoginSubmit = async (data) => {
    try {
      console.log(data)
      const response = await loginUser(data)
    } catch (error) {
      if(error.response){
          console.log(error.response)
      }
      console.log(error);
    }
  }

  const onSignUpSubmit = async (data) => {
   
    try {
  
      const response = await registerUser(data)
    } catch (error) {

      if(error.response){
        console.log(error.response)

      }
      console.log(error);
    }
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* LEFT DIV: Text Content */}
        <div className="text-white bg-[#0A100F] flex items-center justify-center p-8">
          <div className="flex flex-col items-start text-left max-w-lg space-y-4">
            <div className="font-bold flex items-center gap-2 text-xl">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                aria-hidden="true"
              >
                <rect width="26" height="26" rx="7" fill="#2DD4BF"></rect>
                <path
                  d="M6 17c3-8 6-8 7-4s4 3 7-5"
                  stroke="#12302C"
                  strokeWidth="2.4"
                  fill="none"
                  strokeLinecap="round"
                ></path>
              </svg>
              AgileFlow
            </div>
            <p className="font-bold text-3xl md:text-4xl leading-tight">
              Plan sprints, track work, ship together.
            </p>
            <p className="text-[#B9CCC8] text-base md:text-lg">
              Projects, backlog, boards, docs and reports for software teams, in
              one place.
            </p>
          </div>
        </div>

        {/* RIGHT DIV: Toggleable Form */}
        <div className="bg-[#B9CCC8] flex items-center justify-center p-8">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6">
            {/* TAB BUTTONS (Login / Signup) */}
            <div className="flex border-b border-gray-200">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 text-center font-semibold text-sm transition-colors border-b-2 ${
                  activeTab === "login"
                    ? "border-[#0A100F] text-[#0A100F]"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-3 text-center font-semibold text-sm transition-colors border-b-2 ${
                  activeTab === "signup"
                    ? "border-[#0A100F] text-[#0A100F]"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* LOGIN FORM */}
            {activeTab === "login" && (
              <form className="space-y-4" onSubmit={handleSubmitlogin(onLoginSubmit)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A100F]"
                    {...registerlogin('userEmail',{required: "email is required"})}
                  />
                  {loginErrors.userEmail && (
                   <p className="text-red-500 text-xs mt-1">{loginErrors.userEmail.message}</p>
                )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A100F]"
                             {...registerlogin('userPassword',{required: "password is required"})}
                  />
                  {loginErrors.userPassword && (
                     <p className="text-red-500 text-xs mt-1">{loginErrors.userPassword.message}</p>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 rounded border-gray-300"
                      {...registerlogin('RememberMe')}
                    />
                    Remember me
                  </label>
                  <a
                    href="#forgot"
                    className="text-[#0A100F] font-semibold hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A100F] text-white py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Log In
                </button>
              </form>
            )}

            {/* SIGNUP FORM */}
            {activeTab === "signup" && (
              <form className="space-y-4" onSubmit={handleSubmitsignup(onSignUpSubmit)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A100F]"
                    {...registersignup('fullName',{required: 'full name is required'})}
                  />
                  {signupErrors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{signupErrors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A100F]"
                      {...registersignup('workEmail',{required: 'email is required'})}
                  />
                     {signupErrors.workEmail     && (
                    <p className="text-red-500 text-xs mt-1">{signupErrors.workEmail.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A100F]"
                     {...registersignup('userPassword',{required: 'password is required'})}
                  />
                     {signupErrors.userPassword && (
                    <p className="text-red-500 text-xs mt-1">{signupErrors.userPassword.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    organization
                  </label>
                  <input
                    type="text"
                    placeholder="enter your organization"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A100F]"
                  {...registersignup('organization',{required: 'organization is required'})}
                  />
                     {signupErrors.organization && (
                    <p className="text-red-500 text-xs mt-1">{signupErrors.organization.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Role
                  </label>
                  <select
                    name="role"
                    id="role"
                    defaultValue=""
                    className="mt-1 w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A100F] focus:border-transparent transition-colors cursor-pointer"
                      {...registersignup('role',{required: 'role is required'})}
                  >
                    <option value="" disabled hidden>
                      Select a role
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Developer">Developer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Scrum Master">Scrum Master</option>
                    <option value="Tester">Tester</option>
                    <option value="Client">Client</option>
                    <option value="viewer">Viewer</option>
                  </select>
                     {signupErrors.role && (
                    <p className="text-red-500 text-xs mt-1">{signupErrors.role.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A100F] text-white py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
