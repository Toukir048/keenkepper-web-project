import { Link } from "react-router";
import { FiHome } from "react-icons/fi";
import { TbError404 } from "react-icons/tb";
import { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    document.title = "KeenKeeper | Page Not Found";
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center bg-emerald-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-white text-emerald-950 shadow-lg sm:h-28 sm:w-28">
          <TbError404 className="text-6xl sm:text-7xl" />
        </div>

        <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Oops!
        </h1>

        <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">
          Page Not Found
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
          The page you are looking for may have been moved, deleted, or never
          existed. Let’s take you back to your meaningful connections.
        </p>

        <Link
          to="/"
          className="btn mt-8 border-none bg-white px-6 text-emerald-950 hover:bg-slate-200"
        >
          <FiHome className="text-lg" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}