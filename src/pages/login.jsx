import React from "react";

const Login = () => {
  let userData = {
    token: false,
  };

  function setEmail() {
    return null;
  }

  function setPassword() {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col justify-content items-center mt-32">
        {userData.token ? (
          <div>Welcome!</div>
        ) : (
          <>
            <div className="flex justify-center items-center w-full">
              <div className="w-1/6">
                <form className="flex flex-col">
                  <label
                    htmlFor="login-username"
                    className="mb-2 text-lg font-semibold"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg text-base h-8 p-5 text-gray-900 bg-gray-400 font-semibold"
                  />
                  <label
                    htmlFor="login-password"
                    className="mt-4 mb-2 text-lg font-semibold"
                  >
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    className="rounded-lg text-base h-8 p-5 text-gray-900 bg-gray-400 font-semibold"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    value="Submit"
                    className="mt-8 px-4 py-2 bg-gray-900 text-red-400 font-semibold text-xl rounded-lg hover:bg-red-400 hover:text-gray-900 "
                  >
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
