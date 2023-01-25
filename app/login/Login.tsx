"use client";
import React from "react";
import { useSession } from "next-auth/react";
import LoginCard from "../components/LoginCard";
import SignUpCard from "../components/SignUpCard";
function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <LoginCard user={session.user} />
      </>
    );
  } else {
    return (
      <>
        <SignUpCard />
      </>
    );
  }
}

export default Login;
