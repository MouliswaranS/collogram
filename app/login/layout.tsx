import React, { ReactNode } from "react";

//This is a RootLayout of our app
function layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default layout;
