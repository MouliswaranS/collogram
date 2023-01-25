import { DefaultSession } from "next-auth/";
import Image from "next/image";
export default function UserCard({ user }: { user: DefaultSession["user"] }) {
  return (
    <>
      {user?.image && (
        <Image
          src={user?.image}
          alt="user image"
          width={150}
          height={150}
          className=" rounded-full"
        />
      )}
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      {console.log(user?.image)}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="blue"
        className="w-6 h-6"
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
      </svg>

      <button
        className=" bg-slate-500 px-5 py-4"
        onClick={() => {
          ChangeSvgColor();
        }}
      >
        change COlor
      </button>
    </>
  );
}

// Path: app/login/page.tsx
function ChangeSvgColor() {
  console.log("change color");
  let dom = document.querySelectorAll("svg");
  dom.forEach((item) => {
    item.style.fill = randomColor();
  });
}

//write a function that create random colors in rgb format
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
// Path: app/login/page.tsx
