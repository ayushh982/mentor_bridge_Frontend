import { CalendarDays, Clock, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getMentorBookings } from "../../services/booking.service";

const Sessions = () => {

    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchSessions = async () => {

            try {

                const res = await getMentorBookings();

                setSessions(res.data);

            } catch (error) {

                console.error(error);

                toast.error("Failed to load sessions.");

            } finally {

                setLoading(false);

            }

        };

        fetchSessions();

    }, []);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

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

                {sessions.length === 0 ? (

                    <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center text-gray-500">
                        No sessions found.
                    </div>

                ) : (

                    sessions.map((session) => (

                        <div
                            key={session._id}
                            className="rounded-3xl border border-gray-200 bg-white p-6"
                        >

                            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                                <div>

                                    <h2 className="text-xl font-semibold">
                                        {session.student.fullName}
                                    </h2>

                                    <p className="mt-2 text-gray-500">
                                        {session.student.email}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-6">

                                        <div className="flex items-center gap-2">

                                            <CalendarDays
                                                size={18}
                                                className="text-indigo-600"
                                            />

                                            {new Date(
                                                session.sessionDate
                                            ).toLocaleDateString()}

                                        </div>

                                        <div className="flex items-center gap-2">

                                            <Clock
                                                size={18}
                                                className="text-indigo-600"
                                            />

                                            {session.sessionTime}

                                        </div>

                                    </div>

                                </div>

                                <div className="flex flex-col items-end gap-4">

                                    <span
                                        className={`rounded-full px-4 py-2 text-sm font-medium ${
                                            session.bookingStatus === "completed"
                                                ? "bg-gray-100 text-gray-600"
                                                : session.bookingStatus === "cancelled"
                                                ? "bg-red-50 text-red-600"
                                                : "bg-green-50 text-green-600"
                                        }`}
                                    >
                                        {session.bookingStatus}
                                    </span>

                                    <button
                                        onClick={() =>
                                            toast.info(
                                                "Video calling feature coming soon!"
                                            )
                                        }
                                        className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
                                    >

                                        <Video size={18} />

                                        Join Session

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </section>

    );
};

export default Sessions;