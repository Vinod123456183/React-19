import React, { useState } from "react";
import { useThemeColors } from "../../colors"; // assuming you have this custom hook
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../components/redux/user/user-slice";

function Login() {
  const {
    pinTheme,
    pinTheme2,
    bgColor,
    borderClass,
    textColor,
    blackBlue,
    whiteTransparent,
  } = useThemeColors();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setError("All Fields Are Required!!");
    }

    setError("");

    try {
      dispatch(signInStart());

      const res = await axios.post(
        "http://localhost:3001/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success === false) {
        dispatch(signInFailure(res.data.message));
        return setError(res.data.message);
      }

      dispatch(signInSuccess(res.data.user));
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      dispatch(signInFailure(errorMessage));
      setError(errorMessage);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className={`${bgColor} border p-8 rounded-lg shadow-md w-96`}>
        <h2 className={`${blackBlue} text-2xl font-semibold text-center`}>
          Login
        </h2>

        <form onSubmit={handleSubmit} className={`mt-6 p-4 rounded-md`}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className={`${textColor} block text-sm font-medium`}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${borderClass} ${textColor} ${whiteTransparent} mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className={`${textColor} block text-sm font-medium`}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`${borderClass} ${textColor} ${whiteTransparent} mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm mt-2 mb-1 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className={`${pinTheme} w-full py-2 mt-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2`}
          >
            Login
          </button>

          <div className="w-full text-center pt-4 pb-2">
            <p>Or</p>
          </div>

          <Link to={"/signup"}>
            <p className={`${pinTheme} text-center`}>
              Don’t have an account? Sign Up
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
