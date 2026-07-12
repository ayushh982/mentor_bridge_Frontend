import {
    CalendarDays,
    IndianRupee,
    Users,
    Star,
} from "lucide-react";

const stats = [
    {
        title: "Today's Sessions",
        value: "04",
        icon: CalendarDays,
    },
    {
        title: "Total Students",
        value: "128",
        icon: Users,
    },
    {
        title: "Total Earnings",
        value: "₹18,450",
        icon: IndianRupee,
    },
    {
        title: "Average Rating",
        value: "4.9",
        icon: Star,
    },
];

const sessions = [
    {
        student: "Ayush Tiwari",
        topic: "React Interview Preparation",
        time: "06:00 PM",
    },
    {
        student: "Rahul Gupta",
        topic: "Node.js Backend",
        time: "08:00 PM",
    },
];

const Dashboard = () => {
    return (
        <section>

            <div className="mb-10">

                <h1 className="text-3xl font-bold">
                    Mentor Dashboard
                </h1>

                <p className="mt-2 text-gray-500">
                    Welcome back. Here's your mentorship overview.
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

            <div className="mt-10 grid gap-8 lg:grid-cols-3">

                <div className="rounded-3xl border border-gray-200 bg-white p-6 lg:col-span-2">

                    <h2 className="text-xl font-semibold">
                        Today's Sessions
                    </h2>

                    <div className="mt-6 space-y-5">

                        {sessions.map((session) => (

                            <div
                                key={session.student}
                                className="flex items-center justify-between rounded-2xl border border-gray-100 p-5"
                            >

                                <div>

                                    <h3 className="font-semibold">
                                        {session.student}
                                    </h3>

                                    <p className="mt-1 text-gray-500">
                                        {session.topic}
                                    </p>

                                </div>

                                <span className="rounded-xl bg-indigo-50 px-4 py-2 text-indigo-600">
                                    {session.time}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6">

                    <h2 className="text-xl font-semibold">
                        Monthly Earnings
                    </h2>

                    <h1 className="mt-8 text-5xl font-bold text-indigo-600">
                        ₹18,450
                    </h1>

                    <p className="mt-4 text-gray-500">
                        +18% compared to last month.
                    </p>

                    <button className="mt-10 w-full rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-700">
                        View Earnings
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Dashboard;