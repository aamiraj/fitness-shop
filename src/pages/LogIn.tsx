import {
  FaArrowLeft,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaUserCheck,
} from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FormField from "../components/Form/FormField";
import { LogInFormData } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../validation";
import { useLogInCustomerMutation } from "../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logOut, setUser } from "../redux/features/auth/authSlice";
import decodeJwtToken from "../utils/jwtHelper";
import { useAppSelector } from "../redux/hooks";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormData>({
    resolver: zodResolver(loginFormSchema),
  });
  const [logIn, { isLoading }] = useLogInCustomerMutation();
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data: LogInFormData) => {
    try {
      const res = await logIn(data).unwrap();

      if (!res?.success) {
        toast.error("Failed to log in!");
      }

      const { email, iat, role } = decodeJwtToken(res?.data?.accessToken);

      dispatch(
        setUser({
          user: {
            id: res?.data?.user?._id,
            fullName: res?.data?.user?.fullName,
            email: email,
            role: role,
            iat: iat,
          },
          token: res?.data?.accessToken,
        })
      );

      toast.success("Successfully logged in.");

      if (location.state?.route) navigate(location.state?.route);
      else navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to log in!");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  if (auth.user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-bold">You are already logged in as: </p>
          <div className="w-full max-w-[400px] p-4 grid grid-cols-2 gap-4">
            <p>Full Name: </p>
            <p className="font-semibold">{auth?.user?.fullName}</p>
            <p>Email: </p>
            <p className="font-semibold">{auth?.user?.email}</p>
            <p>Role: </p>
            <p className="font-semibold">{auth?.user?.role}</p>
          </div>

          <button
            type="button"
            className="ripple-button"
            onClick={() => dispatch(logOut())}
          >
            Log Out
          </button>

          <Link
            to={"/"}
            className="text-sm text-primary flex items-center gap-2"
          >
            <FaArrowLeft />
            Back To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="container">
        {/* sign in log in form  */}
        <div className="h-screen flex items-center justify-center">
          <div
            className="w-[500px] mx-auto max-w-full p-4 md:p-8 text-gray-700 rounded-lg bg-white/20 backdrop-blur-md shadow-lg border border-white/30 flex flex-col items-center justify-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="flex flex-col justify-center items-center gap-4 text-4xl font-bold tracking-wide p-2 text-center">
                <FaUserCheck />
                Sign In
              </h1>
              <div className="text-lg flex items-center gap-2 justify-evenly">
                <Link to={"#"} className="link">
                  <FaGoogle />
                </Link>
                <Link to={"#"} className="link">
                  <FaFacebook />
                </Link>
                <Link to={"#"} className="link">
                  <FaGithub />
                </Link>
                <Link to={"#"} className="link">
                  <FaLinkedin />
                </Link>
              </div>
              <span className="text-gray-600 text-sm">
                or use your email and password
              </span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-center gap-6 w-full mx-auto"
            >
              {/* email field  */}
              <FormField
                type="email"
                placeholder="Email"
                name="email"
                error={errors.email}
                register={register}
                disabled={isLoading}
              />
              {/* password field  */}
              <FormField
                type="password"
                placeholder="Password"
                name="password"
                error={errors.password}
                register={register}
                disabled={isLoading}
              />

              <Link to={"/sign-up"} className="text-gray-600 text-sm underline">
                Don't have an account?
              </Link>

              <button
                type="submit"
                className="ripple-button"
                disabled={isLoading}
              >
                {isLoading ? "Wait..." : "Log In"}
                {isLoading && <span className="loader"></span>}
              </button>
            </form>
            <Link
              to={"/"}
              className="text-sm text-primary flex items-center gap-2"
            >
              <FaArrowLeft />
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
