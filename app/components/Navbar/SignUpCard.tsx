import { DefaultSession } from "next-auth/";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignUpCard() {
  const [isBanner, SetBanner] = useState(true);
  const showBanner = () => {
    let dom = document.getElementById("account-banner");
    if (dom && isBanner) {
      dom.style.animation = "slide-from-right 0.5s ease-out";
      dom.style.transition = "0.34s";
      dom.style.pointerEvents = "auto";
      dom.style.display = "flex";
      SetBanner(!isBanner);
      return;
    } else if (dom) {
      dom.style.pointerEvents = "none";
      dom.style.display = "none";
      SetBanner(!isBanner);
      return;
    }
  };
  useEffect(() => {
    let dom = document.getElementById("account-banner");
    if (dom && isBanner) {
      dom.style.pointerEvents = "none";
      dom.style.display = "none";
    }
  }, []);
  return (
    <div className="left-10 sm:ml-0">
      <button
        onClick={() => {
          showBanner();
        }}
        className=" px-5 py-2 bg-slate-100 rounded-lg "
      >
        profile
      </button>
      <article
        aria-details="accout-card"
        className=" bg-white bg-gradient-to-tr from-slate-50 to-zinc-50 m-3 w-fit sm:px-16 sm:py-16 flex flex-col absolute right-0 items-center shadow-md rounded-xl noblue sm:absolute sm:right-0"
        id="account-banner"
      >
        <button
          onClick={() => signIn()}
          className=" bg-orange-300  px-10 py-3 m-3 rounded-md hover:bg-slate-500 hover:text-white transition-all "
        >
          Sign In
        </button>
      </article>
    </div>
  );
}

// import { signIn } from "next-auth/react";
// import React from "react";
// function SignUpCard() {
//   return (
//     <button
//       onClick={() => signIn()}
//       className="px-10 bg-amber-200 mx-10 my3 py-2 rounded-md font-poppins font-medium text-lg"
//     >
//       Sign in
//     </button>
//   );
// }

// export default SignUpCard;
