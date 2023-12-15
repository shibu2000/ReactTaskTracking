import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="h-screen border flex flex-col items-center justify-center text-5xl uppercase text-slate-300">
      <p className="mb-6">404</p>
      <p>page not found</p>
      <Link
        to="/"
        className="text-sm mt-5 hover:text-indigo-400 hover:underline"
      >
        go to home
      </Link>
    </section>
  );
}

export default Error;
