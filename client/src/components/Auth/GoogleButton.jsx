import { FcGoogle } from "react-icons/fc";

function GoogleButton() {
  return (
    <button
      className="w-full border border-slate-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-slate-100 transition"
    >
      <FcGoogle size={24} />

      <span className="font-medium">
        Continue with Google
      </span>
    </button>
  );
}

export default GoogleButton;