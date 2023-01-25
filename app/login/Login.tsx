// Main consent screen for login the user

"use client";
// useSelection use React.Context so "use client"
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import UserCard from "./UserCard";
function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          className=" w-24 bg-zinc-500 rounded-sm text-white"
        >
          Sign out
        </button>
        <UserCard user={session.user} />
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => signIn()}
          className=" w-24 bg-zinc-500 rounded-sm"
        >
          Sign in
        </button>
      </>
    );
  }
}

export default Login;
