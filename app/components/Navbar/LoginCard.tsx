import { DefaultSession } from "next-auth/";
import { signOut } from "next-auth/react";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoginCard({ user }: { user: DefaultSession["user"] }) {
  const [isBanner, SetBanner] = useState(true);
  const showBanner = () => {
    let dom = document.getElementById("account-banner");
    if (dom && isBanner) {
      dom.style.animation = "slide-in 0.5s ease-out";
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
    <div className=" left-10 sm:ml-0">
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
        className=" bg-white bg-gradient-to-tr from-slate-50 to-zinc-50 m-3 w-fit sm:px-7 sm:py-16 p-5 flex flex-col absolute right-0 items-center shadow-md rounded-xl noblue sm:absolute sm:right-0"
        id="account-banner"
      >
        {user?.image && (
          <Image
            src={user?.image}
            alt="user image"
            width={80}
            height={80}
            className=" rounded-full"
          />
        )}
        <h1 className=" font-poppins sm:text-2xl sm:my-5 font-bold text-lg">
          {user?.name}
        </h1>
        <p className=" font-poppins  sm:my-2 sm:h-5 text-lg font-lg">
          {user?.email}
        </p>
        <button
          onClick={() => signOut()}
          className="w-4/6 bg-slate-300 rounded-md py-2 shadow-md my-5 animatable"
        >
          Sign Out
        </button>
      </article>
    </div>
  );
}
