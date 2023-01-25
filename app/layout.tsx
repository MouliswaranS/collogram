import React, { ReactNode } from "react";
import Link from "next/link";
import "../styles/globals.css";
import Providerwrapper from "./Providerwrapper";
//This is a RootLayout of our app
function layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Collogram</title>
      </head>
      <body>
        <Providerwrapper>{children}</Providerwrapper>
      </body>
    </html>
  );
}

export default layout;
