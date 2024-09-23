import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaUserCheck,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FormField from "../components/Form/FormField";
import { LogInFormData } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../validation";
import { useLogInCustomerMutation } from "../redux/features/auth/authApi";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";
import decodeJwtToken from "../utils/jwtHelper";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormData>({
    resolver: zodResolver(loginFormSchema),
  });
  const [logIn, { isLoading }] = useLogInCustomerMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            email: email,
            role: role,
            iat: iat,
          },
          token: res?.data?.accessToken,
        })
      );

      toast.success("Successfully logged in.");
      navigate("/");
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

  return (
    <div className="gradient-2">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        {/* sign in log in form  */}
        <div className="h-screen flex items-center justify-center">
          <div
            className="w-[500px] mx-auto max-w-full p-4 md:p-8 text-gray-700 rounded-lg bg-white/20 backdrop-blur-md shadow-lg border border-white/30 flex flex-col items-center justify-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="space-y-4">
              <h1 className="flex flex-col justify-center items-center gap-4 text-4xl font-bold tracking-wide p-2 text-center">
                <FaUserCheck />
                Sign In
              </h1>
              <div className="flex items-center gap-2 justify-evenly">
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
              />
              {/* password field  */}
              <FormField
                type="password"
                placeholder="Password"
                name="password"
                error={errors.password}
                register={register}
              />

              <Link to={"/sign-up"} className="text-gray-600 text-sm underline">
                Don't have an account?
              </Link>

              <button type="submit" className="ripple-button">
                {isLoading ? "Wait..." : "Sign Up"}
                {isLoading && <span className="loader"></span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
