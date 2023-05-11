import React from "react";
import CardRoute from "../../components/CardRoute/CardRoute";

function Page404() {
  const card = [
    {
      title: " are you lost",
      cap: "hi gays im here",
      btn: "go to home",
      link: "/",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col  items-center justify-center w-full">
        <p className="text-5xl  md:text-7xl lg:text-9xl py-4">404 </p>
        <p className="text-3xl  md:text-4xl lg:text-6xl">پیدا نشد!</p>
      </div>
      <div className="flex justify-center flex-wrap">
        <CardRoute arr={card} />
      </div>
    </div>
  );
}

export default Page404;
