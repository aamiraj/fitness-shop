import { useForm } from "react-hook-form";
import {
  FaArrowLeft,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaUserPlus,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { RegisterFormData } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "../validation";
import { useEffect } from "react";
import Aos from "aos";
import FormField from "../components/Form/FormField";
import { useSignUpCustomerMutation } from "../redux/features/auth/authApi";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });
  const [signUp, { isLoading }] = useSignUpCustomerMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...mainData } = data; // mainData has email, password, fullName

    try {
      const res = await signUp(mainData).unwrap();

      if (!res.success) {
        toast.error("Failed to create account!");
      }

      toast.success("Successfully created account.");
      navigate("/log-in");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create account!");
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className="">
      <div className="container">
        {/* sign in log in form  */}
        <div className="min-h-screen flex items-center justify-center">
          <div
            className="w-[500px] mx-auto max-w-full p-4 md:p-8 text-gray-700 rounded-lg bg-white/20 backdrop-blur-md shadow-lg border border-white/30 flex flex-col items-center justify-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="flex flex-col justify-center items-center gap-4 text-4xl font-bold tracking-wide p-2 text-center">
                <FaUserPlus />
                Create Account
              </h1>
              <div className="text-lg flex items-center gap-4 justify-evenly">
                <Link to={"#"}>
                  <FaGoogle />
                </Link>
                <Link to={"#"}>
                  <FaFacebook />
                </Link>
                <Link to={"#"}>
                  <FaGithub />
                </Link>
                <Link to={"#"}>
                  <FaLinkedin />
                </Link>
              </div>
              <span className="text-gray-600 text-sm text-center">
                or use your email and password
              </span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-center gap-6 w-full mx-auto"
            >
              {/* full name field  */}
              <FormField
                type="text"
                placeholder="Full Name"
                name="fullName"
                error={errors?.fullName}
                register={register}
                disabled={isLoading}
              />
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
              {/* confirm password field  */}
              <FormField
                type="password"
                placeholder="Confirm Your Password"
                name="confirmPassword"
                error={errors?.confirmPassword}
                register={register}
                disabled={isLoading}
              />
              <Link to={"/log-in"} className="text-gray-600 text-sm underline">
                Already have an account?
              </Link>

              <button
                type="submit"
                className="ripple-button"
                disabled={isLoading}
              >
                {isLoading ? "Wait..." : "Sign Up"}
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

export default SignUp;
