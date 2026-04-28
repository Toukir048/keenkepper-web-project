import friendsData from "../data/friendsData.json";

export default function Home() {
  const stats = [
    { value: "10", label: "Total Friends" },
    { value: "3", label: "On Track" },
    { value: "6", label: "Need Attention" },
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
            {friendsData.map((friend) => (
              <div
                key={friend.id}
                className="card rounded-lg border border-slate-100 bg-white shadow-sm"
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
                    className={`mt-2 rounded-full px-3 py-1 text-xs font-bold ${
                      statusStyle[friend.status]
                    }`}
                  >
                    {statusText[friend.status]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}