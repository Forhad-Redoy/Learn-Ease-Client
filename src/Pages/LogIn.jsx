import React, { useState, useRef, useContext, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../Components/MyContainer";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const DEMO_USER = {
    email: "demo.user@gmail.com",
    password: "DemoUser@123",
  };

  const DEMO_ADMIN = {
    email: "demo.admin@gmail.com",
    password: "DemoAdmin@123",
  };
const LogIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    sendPassResetEmailFunc, // still used elsewhere in your app if needed
    setLoading,
    setUser,
    user,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  

  // Safer redirect when already logged in
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const emailRef = useRef(null);

  const handleDemoLogin = ({ email, password }) => {
    setLoading(true);

    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        toast.success("Demo login successful");
        navigate(from);
      })
      .catch((e) => {
        console.error(e);
        toast.error("Demo login failed");
      })
      .finally(() => setLoading(false));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value.trim();
    const password = e.target.password?.value;

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setLoading(true); // ✅ Start loading before login attempt

    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate(from);
      })
      .catch((e) => {
        console.error("Login error:", e.code, e.message);

        if (e.code === "auth/user-not-found") {
          toast.error(
            "No account found with this email. Redirecting to signup..."
          );
          setTimeout(() => navigate("/signup"), 2000);
        } else if (e.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (e.code === "auth/invalid-credential") {
          toast.error("Invalid email or password. Please check and try again.");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email address format.");
        } else {
          toast.error(
            "Login failed. Please check your credentials and try again."
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoToForgot = () => {
    const typedEmail = emailRef.current?.value || "";
    navigate("/forger-password", { state: { email: typedEmail } });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Login to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Log In
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Forgot password now navigates */}
              <button
                className="hover:underline cursor-pointer"
                onClick={handleGoToForgot}
                type="button"
              >
                Forget password?
              </button>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
              >
                Login
              </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEmail(DEMO_USER.email);
                    setPassword(DEMO_USER.password);
                    handleDemoLogin(DEMO_USER);
                  }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold"
                >
                  Demo User
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEmail(DEMO_ADMIN.email);
                    setPassword(DEMO_ADMIN.password);
                    handleDemoLogin(DEMO_ADMIN);
                  }}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold"
                >
                  Demo Admin
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              <button
                type="button"
                onClick={signInWithEmailFunc}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-pink-300 hover:text-white underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default LogIn;
