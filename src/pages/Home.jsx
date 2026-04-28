export default function Home() {
  const stats = [
    { value: "10", label: "Total Friends" },
    { value: "3", label: "On Track" },
    { value: "6", label: "Need Attention" },
    { value: "12", label: "Interactions This Month" },
  ];

  return (
    <section className="min-h-screen bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
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
      </div>
    </section>
  );
}