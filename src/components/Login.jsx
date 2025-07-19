import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || (isSignup && !confirm)) {
      setError("Please fill all fields.");
      return;
    }
    if (isSignup && password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    // For demo, just save username (no real user db)
    localStorage.setItem("finditfast_user", username);
    onLogin(username);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isSignup ? "Sign Up for FindItFast" : "Login to FindItFast"}</h2>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <input
            className="login-input"
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        )}
        {error && <div className="login-error">{error}</div>}
        <button className="login-btn" type="submit">
          {isSignup ? "Sign Up" : "Login"}
        </button>
        <div style={{ textAlign: "center", marginTop: 8 }}>
          {isSignup ? (
            <span>
              Already have an account?{' '}
              <span
                className="login-toggle-link"
                onClick={() => {
                  setIsSignup(false);
                  setError("");
                }}
              >
                Login
              </span>
            </span>
          ) : (
            <span>
              Don&apos;t have an account?{' '}
              <span
                className="login-toggle-link"
                onClick={() => {
                  setIsSignup(true);
                  setError("");
                }}
              >
                Sign up
              </span>
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login; 