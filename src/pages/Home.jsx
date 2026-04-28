import { useEffect, useState } from "react";
import friendsData from "../data/friendsData.json";
import { Link } from "react-router";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalFriends = friends.length;
  const onTrack = friends.filter((friend) => friend.status === "on_track").length;
  const needAttention = friends.filter(
    (friend) => friend.status === "almost_due" || friend.status === "overdue"
  ).length;

  const stats = [
    { value: totalFriends, label: "Total Friends" },
    { value: onTrack, label: "On Track" },
    { value: needAttention, label: "Need Attention" },
    { value: "12", label: "Interactions This Month" },
  ];

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
        <div className="text-center">
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
            <span className="loading loading-ring h-28 w-28 text-emerald-900"></span>
            <span className="loading loading-spinner absolute h-12 w-12 text-emerald-700"></span>
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-800">
            Loading Your Friends
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Preparing meaningful connections...
          </p>

          <div className="mt-6 flex justify-center gap-2">
            <span className="h-3 w-3 animate-bounce rounded-full bg-emerald-900"></span>
            <span className="h-3 w-3 animate-bounce rounded-full bg-emerald-700 [animation-delay:0.15s]"></span>
            <span className="h-3 w-3 animate-bounce rounded-full bg-emerald-500 [animation-delay:0.3s]"></span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Friends to keep close in your life
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="btn mt-6 border-none bg-emerald-900 px-5 text-white hover:bg-emerald-950">
            <span className="text-lg leading-none">+</span>
            Add a Friend
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="card rounded-lg border border-slate-100 bg-white shadow-sm"
            >
              <div className="card-body items-center py-7 text-center">
                <h2 className="text-3xl font-bold text-emerald-900">
                  {item.value}
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-b border-slate-200"></div>

        <div className="mt-8">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            Your Friends
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {friends.map((friend) => (
              <Link
                to={`/friend/${friend.id}`}
                key={friend.id}
                className="card rounded-lg border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="card-body items-center py-8 text-center">
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />

                  <h3 className="mt-3 text-xl font-bold text-slate-800">
                    {friend.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {friend.days_since_contact}d ago
                  </p>

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

                  <span
                    className={`mt-2 rounded-full px-3 py-1 text-xs font-bold ${statusStyle[friend.status]
                      }`}
                  >
                    {statusText[friend.status]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}