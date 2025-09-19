import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => { 
    e.preventDefault(); // to prevent reloading of the page 

    // call parent App's handleLogin
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black ">
      <div className="border-2 p-20 border-emerald-600 rounded-2xl ">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email address"
            required
            className="border-2 text-white border-emerald-600 rounded-full py-4 px-3 text-xl outline-none bg-transparent placeholder:text-gray-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            required
            className="border-2 text-white mt-4 border-emerald-600 rounded-full py-4 px-3 text-xl outline-none bg-transparent placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="mt-5 text-white bg-emerald-600 rounded-full py-4 px-12 text-xl outline-none border-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
