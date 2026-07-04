import AuthLayout from "../components/Auth/AuthLayout";
import GoogleButton from "../components/Auth/GoogleButton";
import InputField from "../components/Auth/InputField";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  FiUser,
  FiMail,
  FiLock,
} from "react-icons/fi";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Start your journey with MailPilot AI"
    >
      {/* Form Starts */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <GoogleButton />

        <div className="flex items-center my-8">
          <hr className="flex-1" />

          <span className="mx-4 text-slate-500">
            OR
          </span>

          <hr className="flex-1" />
        </div>

        {/* Full Name */}
        <InputField
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          icon={FiUser}
          register={register}
          name="fullName"
          validation={{
            required: "Full Name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          }}
          error={errors.fullName}
        />

        {/* Email */}
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          icon={FiMail}
          register={register}
          name="email"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          }}
          error={errors.email}
        />

        {/* Password */}
        <InputField
          label="Password"
          type="password"
          placeholder="Create a password"
          icon={FiLock}
          register={register}
          name="password"
          validation={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum 8 characters",
            },
          }}
          error={errors.password}
        />

        {/* Confirm Password */}
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          icon={FiLock}
          register={register}
          name="confirmPassword"
          validation={{
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          }}
          error={errors.confirmPassword}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-xl mt-4 hover:bg-blue-700 hover:scale-105 shadow-lg transition-all duration-300 disabled:bg-gray-400"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>

        {/* Login Link */}
        <p className="text-center mt-6 text-slate-600">
          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>
        </p>

      </form>
      {/* Form Ends */}

    </AuthLayout>
  );
}

export default Signup;