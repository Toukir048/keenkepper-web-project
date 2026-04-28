import { useEffect, useState } from "react";

export default function Timeline() {
    const [timeline, setTimeline] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        const savedTimeline = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(savedTimeline);
    }, []);

    const iconMap = {
        call: "/call.png",
        text: "/text.png",
        video: "/video.png",
    };

    const filteredTimeline =
        filter === "all"
            ? timeline
            : timeline.filter((item) => item.type === filter);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    const handleClearHistory = () => {
        localStorage.removeItem("timeline");
        setTimeline([]);
        setFilter("all");
    };

    return (
        <section className="min-h-screen bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900">Timeline</h1>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="select w-full max-w-xs border-none bg-white text-slate-500 shadow-sm"
                    >
                        <option value="all">Filter timeline</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                    </select>

                    <button
                        onClick={handleClearHistory}
                        className="btn border-none bg-red-500 text-white shadow-sm hover:bg-red-600"
                    >
                        Clear History
                    </button>
                </div>

                <div className="mt-5 space-y-4">
                    {filteredTimeline.length > 0 ? (
                        filteredTimeline.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                            >
                                <div className="flex h-12 w-12 items-center justify-center">
                                    <img
                                        src={iconMap[item.type]}
                                        alt={item.type}
                                        className="h-8 w-8 object-contain"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-emerald-900">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        {formatDate(item.date)}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="rounded-xl bg-white px-6 py-14 text-center shadow-sm">
                            <div className="mx-auto flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-emerald-50">
                                <span className="text-4xl">📭</span>
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-slate-800">
                                No History Yet
                            </h2>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                                Your interaction history is empty. Go to a friend profile and start a
                                quick check-in by calling, texting, or video chatting.
                            </p>

                            <div className="mt-6 flex justify-center gap-2">
                                <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-900"></span>
                                <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-700 [animation-delay:0.2s]"></span>
                                <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-500 [animation-delay:0.4s]"></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}