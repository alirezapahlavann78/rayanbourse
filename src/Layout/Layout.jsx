import React from "react";

function Layout(props) {
  return (
    <div className="">
      <div className="min-h-screen bg-slate-100 px-8">
    {props.children}
      </div>
    </div>
  );
}
export default Layout;
