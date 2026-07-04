import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function InputField({
  label,
  type,
  placeholder,
  icon: Icon,
  register,
  name,
  validation,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium text-slate-700">
        {label}
      </label>

      <div
        className={`flex items-center border rounded-xl px-4 ${
          error ? "border-red-500" : "border-slate-300"
        }`}
      >
        {Icon && (
          <Icon className="text-slate-400 mr-3" />
        )}

        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className="w-full py-3 outline-none"
          {...register(name, validation)}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default InputField;