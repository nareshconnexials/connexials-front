import React from "react";

function Main({ children }) {
  return (
    <main className="overflow-y-auto w-full flex-1">
      <div className="container grid px-6 mx-auto ">{children}</div>
    </main>
  );
}

export default Main;
