"use client";
import React from "react";
import { useSession } from "next-auth/react";
import LoginCard from "../components/Navbar/LoginCard";
import SignUpCard from "../components/Navbar/SignUpCard";
function Login() {
  const { data: session } = useSession();
  if (session) {
    console.log(session.user);
    let log = window.localStorage.getItem("user");
    console.log(log);
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
