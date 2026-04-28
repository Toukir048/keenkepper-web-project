import { useEffect, useState } from "react";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

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

    return (
        <section className="min-h-screen bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900">Timeline</h1>

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select mt-5 w-full max-w-xs border-none bg-white text-slate-500 shadow-sm"
                >
                    <option value="all">Filter timeline</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>

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
                        <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                            <p className="text-slate-500">No timeline entries found.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}