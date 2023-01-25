"use client";
// wraps our Entire app in a session provider all [comments are by github copilot]
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

function Providerwrapper({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providerwrapper;
