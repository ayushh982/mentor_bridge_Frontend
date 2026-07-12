import { CalendarDays, Clock, Eye } from "lucide-react";

const bookings = [
    {
        id: "BK001",
        student: "Ayush Tiwari",
        mentor: "Rahul Sharma",
        date: "15 July 2026",
        time: "06:00 PM",
        status: "Completed",
    },
    {
        id: "BK002",
        student: "Rahul Gupta",
        mentor: "Priya Singh",
        date: "16 July 2026",
        time: "08:00 PM",
        status: "Upcoming",
    },
    {
        id: "BK003",
        student: "Aman Verma",
        mentor: "Vikas Kumar",
        date: "18 July 2026",
        time: "07:30 PM",
        status: "Cancelled",
    },
];

const AdminBookings = () => {
    return (

        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Bookings
                </h1>

                <p className="mt-2 text-gray-500">
                    View and manage all mentorship bookings.
                </p>

            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">

                <table className="w-full">

                    <thead className="bg-slate-50">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                Booking ID
                            </th>

                            <th className="px-6 py-4 text-left">
                                Student
                            </th>

                            <th className="px-6 py-4 text-left">
                                Mentor
                            </th>

                            <th className="px-6 py-4 text-left">
                                Schedule
                            </th>

                            <th className="px-6 py-4 text-left">
                                Status
                            </th>

                            <th className="px-6 py-4 text-center">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {bookings.map((booking) => (

                            <tr
                                key={booking.id}
                                className="border-t border-gray-100"
                            >

                                <td className="px-6 py-5 font-medium">
                                    {booking.id}
                                </td>

                                <td className="px-6 py-5">
                                    {booking.student}
                                </td>

                                <td className="px-6 py-5">
                                    {booking.mentor}
                                </td>

                                <td className="px-6 py-5">

                                    <div className="flex flex-col gap-2">

                                        <span className="flex items-center gap-2">

                                            <CalendarDays
                                                size={16}
                                                className="text-indigo-600"
                                            />

                                            {booking.date}

                                        </span>

                                        <span className="flex items-center gap-2">

                                            <Clock
                                                size={16}
                                                className="text-indigo-600"
                                            />

                                            {booking.time}

                                        </span>

                                    </div>

                                </td>

                                <td className="px-6 py-5">

                                    <span
                                        className={`rounded-full px-3 py-1 text-sm ${
                                            booking.status === "Completed"
                                                ? "bg-green-50 text-green-600"
                                                : booking.status === "Upcoming"
                                                ? "bg-yellow-50 text-yellow-600"
                                                : "bg-red-50 text-red-600"
                                        }`}
                                    >
                                        {booking.status}
                                    </span>

                                </td>

                                <td className="px-6 py-5 text-center">

                                    <button className="rounded-xl bg-indigo-600 p-3 text-white hover:bg-indigo-700">

                                        <Eye size={18} />

                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>

    );

};

export default AdminBookings;