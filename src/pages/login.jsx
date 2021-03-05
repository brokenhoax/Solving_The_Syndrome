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
            <div>
              <div>
                <h2>Log In</h2>
                <form>
                  <label htmlFor="login-email">Email</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="login-email">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input type="submit" value="Submit" />
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
