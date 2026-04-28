import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FaRegBell, FaArchive, FaRegTrashAlt } from "react-icons/fa";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { toast } from "react-toastify";
import friendsData from "../data/friendsData.json";

export default function FriendDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriend(friendsData.find((item) => item.id === Number(id)));
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

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

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      friendId: friend.id,
      date: new Date().toISOString(),
      title: `${type} with ${friend.name}`,
      type: type.toLowerCase(),
    };

    const oldTimeline = JSON.parse(localStorage.getItem("timeline")) || [];

    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...oldTimeline])
    );

    toast.success(`${type} with ${friend.name} added to timeline`);
  };

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <span className="loading loading-ring h-20 w-20 text-emerald-900"></span>
          <h2 className="mt-5 text-xl font-bold text-slate-800">
            Loading Friend Details
          </h2>
        </div>
      </section>
    );
  }

  if (!friend) {
    return (
      <section className="min-h-screen bg-[#f8fafc] py-12 text-center">
        <h1 className="text-3xl font-bold text-slate-800">Friend Not Found</h1>
        <Link
          to="/"
          className="btn mt-6 border-none bg-white text-slate-800 shadow-sm"
        >
          Back Home
        </Link>
      </section>
    );
  }

  const formattedDate = new Date(friend.next_due_date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <section className="min-h-screen bg-[#f8fafc] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[320px_1fr]">
        <aside>
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />

            <h2 className="mt-4 text-lg font-bold text-slate-800">
              {friend.name}
            </h2>

            <div className="mt-2 flex flex-col items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  statusStyle[friend.status]
                }`}
              >
                {statusText[friend.status]}
              </span>

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

            <p className="mt-2 text-sm text-slate-400">Preferred: email</p>
          </div>

          <div className="mt-3 space-y-2">
            <button className="btn h-11 w-full border-none bg-white text-slate-700 shadow-sm hover:bg-slate-50">
              <FaRegBell />
              Snooze 2 Weeks
            </button>

            <button className="btn h-11 w-full border-none bg-white text-slate-700 shadow-sm hover:bg-slate-50">
              <FaArchive />
              Archive
            </button>

            <button className="btn h-11 w-full border-none bg-white text-red-500 shadow-sm hover:bg-red-50">
              <FaRegTrashAlt />
              Delete
            </button>
          </div>
        </aside>

        <main className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-emerald-900">
                {friend.days_since_contact}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Days Since Contact
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-emerald-900">
                {friend.goal}
              </h3>
              <p className="mt-2 text-sm text-slate-500">Goal (Days)</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-emerald-900">
                {formattedDate}
              </h3>
              <p className="mt-2 text-sm text-slate-500">Next Due</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-emerald-900">
                Relationship Goal
              </h3>

              <button className="btn btn-sm border-none bg-white text-slate-700 shadow-sm hover:bg-slate-50">
                Edit
              </button>
            </div>

            <p className="mt-3 text-slate-500">
              Connect every{" "}
              <span className="font-bold text-slate-800">
                {friend.goal} days
              </span>
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-emerald-900">
              Quick Check-In
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button
                onClick={() => handleCheckIn("Call")}
                className="btn h-[70px] border-none bg-[#f8fafc] text-slate-800 shadow-sm hover:bg-slate-100"
              >
                <div className="flex flex-col items-center gap-1">
                  <IoCallOutline className="text-3xl" />
                  <span>Call</span>
                </div>
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="btn h-[70px] border-none bg-[#f8fafc] text-slate-800 shadow-sm hover:bg-slate-100"
              >
                <div className="flex flex-col items-center gap-1">
                  <MdOutlineTextsms className="text-3xl" />
                  <span>Text</span>
                </div>
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="btn h-[70px] border-none bg-[#f8fafc] text-slate-800 shadow-sm hover:bg-slate-100"
              >
                <div className="flex flex-col items-center gap-1">
                  <IoVideocamOutline className="text-3xl" />
                  <span>Video</span>
                </div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}