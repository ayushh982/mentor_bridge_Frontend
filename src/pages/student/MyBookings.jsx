import { CalendarDays, Clock, Video } from "lucide-react";

const bookings = [
    {
        id: 1,
        mentor: "Rahul Sharma",
        company: "Google",
        date: "15 July 2026",
        time: "6:00 PM",
        status: "Upcoming",
    },
    {
        id: 2,
        mentor: "Priya Singh",
        company: "Microsoft",
        date: "18 July 2026",
        time: "8:00 PM",
        status: "Completed",
    },
];

const MyBookings = () => {
    return (
        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    My Bookings
                </h1>

                <p className="mt-2 text-gray-500">
                    Manage your mentorship sessions.
                </p>

            </div>

            <div className="space-y-6">

                {bookings.map((booking) => (

                    <div
                        key={booking.id}
                        className="rounded-3xl border border-gray-200 bg-white p-6"
                    >

                        <div className="flex flex-col justify-between gap-6 lg:flex-row">

                            <div>

                                <h2 className="text-xl font-semibold">
                                    {booking.mentor}
                                </h2>

                                <p className="mt-1 text-gray-500">
                                    {booking.company}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-6">

                                    <div className="flex items-center gap-2">

                                        <CalendarDays
                                            size={18}
                                            className="text-indigo-600"
                                        />

                                        {booking.date}

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <Clock
                                            size={18}
                                            className="text-indigo-600"
                                        />

                                        {booking.time}

                                    </div>

                                </div>

                            </div>

                            <div className="flex flex-col items-end justify-between">

                                <span
                                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                                        booking.status === "Upcoming"
                                            ? "bg-green-50 text-green-600"
                                            : "bg-gray-100 text-gray-600"
                                    }`}
                                >
                                    {booking.status}
                                </span>

                                <button className="mt-6 flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">

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

export default MyBookings;