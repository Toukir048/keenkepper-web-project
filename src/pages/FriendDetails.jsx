import { Link, useParams } from "react-router";
import { FaRegBell, FaArchive, FaTrashAlt } from "react-icons/fa";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import friendsData from "../data/friendsData.json";

export default function FriendDetails() {
  const { id } = useParams();

  const friend = friendsData.find((item) => item.id === Number(id));

  if (!friend) {
    return (
      <section className="min-h-screen bg-[#f8fafc] px-4 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Friend Not Found
          </h1>

          <Link
            to="/"
            className="btn mt-6 border-none bg-emerald-900 text-white hover:bg-emerald-950"
          >
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  const statusStyle = {
    on_track: "bg-emerald-900 text-white",
    almost_due: "bg-amber-400 text-white",
    overdue: "bg-red-500 text-white",
  };

  const statusText = {
    on_track: "On-Track",
    almost_due: "Almost Due",
    overdue: "Overdue",
  };

  const formattedDate = new Date(friend.next_due_date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <section className="min-h-screen bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[320px_1fr]">
        {/* Left Profile Card */}
        <div>
          <div className="card rounded-lg border border-slate-100 bg-white shadow-sm">
            <div className="card-body items-center py-8 text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="h-24 w-24 rounded-full object-cover"
              />

              <h2 className="mt-3 text-xl font-bold text-slate-800">
                {friend.name}
              </h2>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  statusStyle[friend.status]
                }`}
              >
                {statusText[friend.status]}
              </span>

              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase text-emerald-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm italic text-slate-400">
                “{friend.bio}”
              </p>

              <p className="text-sm text-slate-400">
                Preferred: {friend.email}
              </p>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm">
            <button className="flex w-full items-center justify-center gap-2 border-b border-slate-100 py-4 text-sm font-bold text-slate-700 hover:bg-slate-50">
              <FaRegBell />
              Snooze 2 Weeks
            </button>

            <button className="flex w-full items-center justify-center gap-2 border-b border-slate-100 py-4 text-sm font-bold text-slate-700 hover:bg-slate-50">
              <FaArchive />
              Archive
            </button>

            <button className="flex w-full items-center justify-center gap-2 py-4 text-sm font-bold text-red-500 hover:bg-red-50">
              <FaTrashAlt />
              Delete
            </button>
          </div>
        </div>

        {/* Right Details Area */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="card rounded-lg border border-slate-100 bg-white shadow-sm">
              <div className="card-body items-center py-7 text-center">
                <h3 className="text-3xl font-bold text-emerald-900">
                  {friend.days_since_contact}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  Days Since Contact
                </p>
              </div>
            </div>

            <div className="card rounded-lg border border-slate-100 bg-white shadow-sm">
              <div className="card-body items-center py-7 text-center">
                <h3 className="text-3xl font-bold text-emerald-900">
                  {friend.goal}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  Goal (Days)
                </p>
              </div>
            </div>

            <div className="card rounded-lg border border-slate-100 bg-white shadow-sm">
              <div className="card-body items-center py-7 text-center">
                <h3 className="text-2xl font-bold text-emerald-900">
                  {formattedDate}
                </h3>
                <p className="text-sm font-medium text-slate-500">Next Due</p>
              </div>
            </div>
          </div>

          <div className="card rounded-lg border border-slate-100 bg-white shadow-sm">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-emerald-900">
                  Relationship Goal
                </h3>

                <button className="btn btn-sm bg-white">Edit</button>
              </div>

              <p className="mt-2 text-slate-500">
                Connect every{" "}
                <span className="font-bold text-slate-800">
                  {friend.goal} days
                </span>
              </p>
            </div>
          </div>

          <div className="card rounded-lg border border-slate-100 bg-white shadow-sm">
            <div className="card-body">
              <h3 className="text-lg font-bold text-emerald-900">
                Quick Check-In
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <button className="btn h-20 bg-[#f8fafc] text-slate-800 hover:bg-slate-100">
                  <div className="flex flex-col items-center gap-1">
                    <IoCallOutline className="text-3xl" />
                    <span>Call</span>
                  </div>
                </button>

                <button className="btn h-20 bg-[#f8fafc] text-slate-800 hover:bg-slate-100">
                  <div className="flex flex-col items-center gap-1">
                    <MdOutlineTextsms className="text-3xl" />
                    <span>Text</span>
                  </div>
                </button>

                <button className="btn h-20 bg-[#f8fafc] text-slate-800 hover:bg-slate-100">
                  <div className="flex flex-col items-center gap-1">
                    <IoVideocamOutline className="text-3xl" />
                    <span>Video</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <Link to="/" className="btn bg-white text-slate-700">
            Back to Friends
          </Link>
        </div>
      </div>
    </section>
  );
}