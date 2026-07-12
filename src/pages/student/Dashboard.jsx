import {
    CalendarDays,
    MessageCircle,
    Users,
    Star,
} from "lucide-react";

const stats = [
    {
        title: "Upcoming Sessions",
        value: "03",
        icon: CalendarDays,
    },
    {
        title: "My Mentors",
        value: "08",
        icon: Users,
    },
    {
        title: "Messages",
        value: "21",
        icon: MessageCircle,
    },
    {
        title: "Average Rating",
        value: "4.9",
        icon: Star,
    },
];

const sessions = [
    {
        mentor: "Rahul Sharma",
        company: "Google",
        date: "12 July",
        time: "6:00 PM",
    },
    {
        mentor: "Priya Singh",
        company: "Microsoft",
        date: "15 July",
        time: "7:30 PM",
    },
];

const Dashboard = () => {
    return (
        <section>

            <div className="mb-10">

                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome Back 👋
                </h1>

                <p className="mt-2 text-gray-500">
                    Here's what's happening today.
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
                                        className="text-indigo-600"
                                        size={24}
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
                        Upcoming Sessions
                    </h2>

                    <div className="mt-6 space-y-5">

                        {sessions.map((session) => (

                            <div
                                key={session.mentor}
                                className="flex items-center justify-between rounded-2xl border border-gray-100 p-5"
                            >

                                <div>

                                    <h3 className="font-semibold">
                                        {session.mentor}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {session.company}
                                    </p>

                                </div>

                                <div className="text-right">

                                    <p className="font-medium">
                                        {session.date}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {session.time}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6">

                    <h2 className="text-xl font-semibold">
                        Recommended Mentor
                    </h2>

                    <img
                        src="https://i.pravatar.cc/150?img=5"
                        alt="mentor"
                        className="mx-auto mt-8 h-24 w-24 rounded-full"
                    />

                    <h3 className="mt-5 text-center text-xl font-semibold">
                        Rahul Sharma
                    </h3>

                    <p className="mt-2 text-center text-gray-500">
                        Senior Software Engineer
                    </p>

                    <button className="mt-8 w-full rounded-xl bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-700">
                        View Profile
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Dashboard;