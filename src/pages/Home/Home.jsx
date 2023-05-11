import React from "react";
import CardRoute from "../../components/CardRoute/CardRoute";

function GridPage() {
  const card = [
    {
      title: "route card",
      cap: "hi gays im here",
      btn: "go to drop page",
      link: "/drop",
    },
    {
      title: "route card",
      cap: "hi gays im here",
      btn: "go to grid page",
      link: "/grid",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-center flex-wrap">
        <CardRoute arr={card} />
      </div>
    </div>
  );
}
export default GridPage;
