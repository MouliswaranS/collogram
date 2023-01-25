import { signIn } from "next-auth/react";
import React from "react";
function SignUpCard() {
  return (
    <button
      onClick={() => signIn()}
      className="px-10 bg-amber-200 mx-10 my3 py-2 rounded-md font-poppins font-medium text-lg"
    >
      Sign in
    </button>
  );
}

export default SignUpCard;
