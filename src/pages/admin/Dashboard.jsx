import {
    Users,
    UserCheck,
    CalendarDays,
    IndianRupee,
} from "lucide-react";

const stats = [
    {
        title: "Total Users",
        value: "1,245",
        icon: Users,
    },
    {
        title: "Pending Mentors",
        value: "18",
        icon: UserCheck,
    },
    {
        title: "Total Bookings",
        value: "2,834",
        icon: CalendarDays,
    },
    {
        title: "Revenue",
        value: "₹1.25L",
        icon: IndianRupee,
    },
];

const pendingMentors = [
    {
        id: 1,
        name: "Rahul Sharma",
        company: "Google",
    },
    {
        id: 2,
        name: "Priya Singh",
        company: "Microsoft",
    },
    {
        id: 3,
        name: "Aman Verma",
        company: "Amazon",
    },
];

const AdminDashboard = () => {
    return (
        <section>

            <div className="mb-10">

                <h1 className="text-3xl font-bold">
                    Admin Dashboard
                </h1>

                <p className="mt-2 text-gray-500">
                    Platform overview and management.
                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="rounded-3xl border border-gray-200 bg-white p-6"
                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-gray-500">
                                        {item.title}
                                    </p>

                                    <h2 className="mt-3 text-3xl font-bold">
                                        {item.value}
                                    </h2>

                                </div>

                                <div className="rounded-2xl bg-indigo-50 p-4">

                                    <Icon
                                        size={24}
                                        className="text-indigo-600"
                                    />

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

            <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6">

                <div className="flex items-center justify-between">

                    <h2 className="text-xl font-semibold">
                        Pending Mentor Requests
                    </h2>

                    <button className="rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50">
                        View All
                    </button>

                </div>

                <div className="mt-6 space-y-4">

                    {pendingMentors.map((mentor) => (

                        <div
                            key={mentor.id}
                            className="flex items-center justify-between rounded-2xl border border-gray-100 p-5"
                        >

                            <div>

                                <h3 className="font-semibold">
                                    {mentor.name}
                                </h3>

                                <p className="text-gray-500">
                                    {mentor.company}
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <button className="rounded-xl bg-green-600 px-5 py-2 text-white hover:bg-green-700">
                                    Approve
                                </button>

                                <button className="rounded-xl bg-red-600 px-5 py-2 text-white hover:bg-red-700">
                                    Reject
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default AdminDashboard;