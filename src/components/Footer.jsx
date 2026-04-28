import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Keen<span className="font-semibold">Keeper</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/60 sm:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <h3 className="mt-7 text-base font-semibold sm:text-lg">
            Social Links
          </h3>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="#"
              className="btn btn-circle btn-sm bg-white text-slate-800 hover:bg-slate-200"
            >
              <AiFillInstagram className="text-lg" />
            </a>

            <a
              href="#"
              className="btn btn-circle btn-sm bg-white text-slate-800 hover:bg-slate-200"
            >
              <FaFacebook className="text-base" />
            </a>

            <a
              href="#"
              className="btn btn-circle btn-sm bg-white text-slate-800 hover:bg-slate-200"
            >
              <FaXTwitter className="text-base" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}