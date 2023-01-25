import { DefaultSession } from "next-auth/";
import { signOut } from "next-auth/react";

import Image from "next/image";

export default function LoginCard({ user }: { user: DefaultSession["user"] }) {
  return (
    <>
      <article
        aria-details="accout-card"
        className=" bg-neutral-50 m-3 w-min px-7 py-16 flex flex-col items-center shadow-lg rounded-xl"
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
        <h1 className=" font-poppins text-2xl my-5 font-bold">{user?.name}</h1>
        <p className=" font-poppins  my-2 h-5 text-lg font-medium">
          {user?.email}
        </p>
        <button
          onClick={() => signOut()}
          className="w-4/6 bg-slate-300 rounded-md py-2 shadow-md my-5 animatable"
        >
          Sign Out
        </button>
      </article>
    </>
  );
}
