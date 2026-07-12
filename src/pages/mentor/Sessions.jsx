import { CalendarDays, Clock, Video } from "lucide-react";

const sessions = [
    {
        id: 1,
        student: "Ayush Tiwari",
        topic: "React Interview Preparation",
        date: "15 July 2026",
        time: "06:00 PM",
        status: "Upcoming",
    },
    {
        id: 2,
        student: "Rahul Gupta",
        topic: "Node.js Backend",
        date: "16 July 2026",
        time: "08:00 PM",
        status: "Completed",
    },
];

const Sessions = () => {
    return (
        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    My Sessions
                </h1>

                <p className="mt-2 text-gray-500">
                    View and manage your mentorship sessions.
                </p>

            </div>

            <div className="space-y-6">

                {sessions.map((session) => (

                    <div
                        key={session.id}
                        className="rounded-3xl border border-gray-200 bg-white p-6"
                    >

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                            <div>

                                <h2 className="text-xl font-semibold">
                                    {session.student}
                                </h2>

                                <p className="mt-2 text-gray-500">
                                    {session.topic}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-6">

                                    <div className="flex items-center gap-2">

                                        <CalendarDays
                                            size={18}
                                            className="text-indigo-600"
                                        />

                                        {session.date}

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <Clock
                                            size={18}
                                            className="text-indigo-600"
                                        />

                                        {session.time}

                                    </div>

                                </div>

                            </div>

                            <div className="flex flex-col items-end gap-4">

                                <span
                                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                                        session.status === "Upcoming"
                                            ? "bg-green-50 text-green-600"
                                            : "bg-gray-100 text-gray-600"
                                    }`}
                                >
                                    {session.status}
                                </span>

                                <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">

                                    <Video size={18} />

                                    Join Session

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Sessions;