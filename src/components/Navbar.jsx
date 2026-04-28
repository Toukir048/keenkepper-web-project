import { NavLink } from "react-router";
import { FiHome } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Timeline", path: "/timeline", icon: <FaRegClock /> },
    { name: "Stats", path: "/stats", icon: <LuChartNoAxesColumnIncreasing /> },
  ];

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="navbar mx-auto min-h-[56px] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Keen<span className="text-emerald-900">Keeper</span>
          </NavLink>
        </div>

        <div className="navbar-end">
          <nav className="hidden items-center gap-2 sm:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 rounded px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-emerald-900 text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                <span className="text-base">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="dropdown dropdown-end sm:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-sm border-none text-emerald-900"
            >
              ☰
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-white p-2 shadow-lg"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-4 py-3 text-base font-bold transition ${
                        isActive
                          ? "bg-emerald-900 text-white"
                          : "text-slate-800 hover:bg-slate-100 hover:text-emerald-900"
                      }`
                    }
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}