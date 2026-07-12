import {
    Star,
    Briefcase,
    Clock,
    CalendarDays,
    IndianRupee,
} from "lucide-react";

const MentorDetails = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">

            <div className="grid gap-10 lg:grid-cols-3">

                <div className="rounded-3xl border border-gray-200 bg-white p-8">

                    <img
                        src="https://i.pravatar.cc/400?img=68"
                        alt=""
                        className="mx-auto h-40 w-40 rounded-full"
                    />

                    <h1 className="mt-6 text-center text-3xl font-bold">
                        Rahul Sharma
                    </h1>

                    <p className="mt-2 text-center text-gray-500">
                        Senior Software Engineer
                    </p>

                    <div className="mt-6 flex justify-center gap-6">

                        <span className="flex items-center gap-2">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            4.9
                        </span>

                        <span className="flex items-center gap-2">
                            <Briefcase size={18} />
                            Google
                        </span>

                    </div>

                    <button className="mt-8 w-full rounded-xl bg-indigo-600 py-3 text-white">
                        Book Session
                    </button>

                </div>

                <div className="space-y-8 lg:col-span-2">

                    <div className="rounded-3xl border border-gray-200 bg-white p-8">

                        <h2 className="text-2xl font-semibold">
                            About
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">

                            Helping students crack product-based companies,
                            DSA, React and Backend interviews.

                        </p>

                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-white p-8">

                        <h2 className="text-2xl font-semibold">
                            Skills
                        </h2>

                        <div className="mt-6 flex flex-wrap gap-3">

                            {[
                                "React",
                                "Node.js",
                                "MongoDB",
                                "System Design",
                                "DSA",
                            ].map((skill) => (

                                <span
                                    key={skill}
                                    className="rounded-full bg-indigo-50 px-4 py-2 text-indigo-600"
                                >
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-white p-8">

                        <h2 className="text-2xl font-semibold">
                            Session Details
                        </h2>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">

                            <div className="flex gap-3">

                                <Clock className="text-indigo-600" />

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Duration
                                    </p>

                                    <p>30 Minutes</p>

                                </div>

                            </div>

                            <div className="flex gap-3">

                                <CalendarDays className="text-indigo-600" />

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Availability
                                    </p>

                                    <p>Weekends</p>

                                </div>

                            </div>

                            <div className="flex gap-3">

                                <IndianRupee className="text-indigo-600" />

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Price
                                    </p>

                                    <p>₹499</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MentorDetails;