import React, { useState } from "react";
import { useThemeColors } from "../../colors";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const {
    pinTheme,
    pinTheme2,
    bgColor,
    borderClass,
    textColor,
    blackBlue,
    whiteTransparent,
    placeholderText,
  } = useThemeColors();

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      return setError("All Fields Are Required!!");
    }

    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3001/signup",
        {
          userName,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success === false) {
        return setError(res.data.message);
      }

      setError("");
      navigate("/login");
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className={`${bgColor} border p-8 rounded-lg shadow-md w-96`}>
        <h2 className={`${blackBlue} text-2xl font-semibold text-center`}>
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className={`mt-6 p-4 rounded-md`}>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="mb-3">
            <label
              htmlFor="userName"
              className={`${textColor} block text-sm font-medium`}
            >
              UserName
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your Name Babu...."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className={`${placeholderText} ${borderClass} ${textColor} ${whiteTransparent} mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
          </div>

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
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${placeholderText} ${borderClass} ${textColor} ${whiteTransparent} mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
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
              placeholder="i_miss_u_babu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`${placeholderText} ${borderClass} ${textColor} ${whiteTransparent} mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
          </div>

          <button
            type="submit"
            className={`${pinTheme} w-full py-2 mt-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2`}
          >
            Sign Up ✅
          </button>

          <div className="w-full text-center pt-4 pb-2">
            <p>Or</p>
          </div>

          <Link to={"/login"}>
            <p className={`${pinTheme} text-center`}>
              Already Have An Account? Login
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
