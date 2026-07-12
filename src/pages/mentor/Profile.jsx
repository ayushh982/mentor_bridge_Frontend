import {
    Mail,
    Phone,
    Briefcase,
    Building2,
    Star,
    Pencil,
} from "lucide-react";

const MentorProfile = () => {
    return (
        <section>

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">
                        My Profile
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage your mentor profile.
                    </p>

                </div>

                <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">

                    <Pencil size={18} />

                    Edit Profile

                </button>

            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">

                <div className="rounded-3xl border border-gray-200 bg-white p-8">

                    <img
                        src="https://i.pravatar.cc/200?img=5"
                        alt="mentor"
                        className="mx-auto h-36 w-36 rounded-full"
                    />

                    <h2 className="mt-6 text-center text-2xl font-bold">
                        Rahul Sharma
                    </h2>

                    <p className="mt-2 text-center text-gray-500">
                        Senior Software Engineer
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-2">

                        <Star
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="font-semibold">
                            4.9 (124 Reviews)
                        </span>

                    </div>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 lg:col-span-2">

                    <h2 className="text-2xl font-semibold">
                        Professional Information
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">

                        <div className="flex gap-4">

                            <Mail className="text-indigo-600" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Email
                                </p>

                                <p>
                                    rahul@gmail.com
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <Phone className="text-indigo-600" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Phone
                                </p>

                                <p>
                                    +91 9876543210
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <Building2 className="text-indigo-600" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Company
                                </p>

                                <p>
                                    Google
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <Briefcase className="text-indigo-600" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Experience
                                </p>

                                <p>
                                    5 Years
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="mt-10">

                        <h3 className="text-lg font-semibold">
                            About
                        </h3>

                        <p className="mt-3 leading-8 text-gray-600">

                            Passionate software engineer helping students
                            prepare for placements, DSA, React, Node.js and
                            system design interviews.

                        </p>

                    </div>

                    <div className="mt-10">

                        <h3 className="text-lg font-semibold">
                            Skills
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-3">

                            {[
                                "React",
                                "Node.js",
                                "MongoDB",
                                "JavaScript",
                                "DSA",
                            ].map((skill) => (

                                <span
                                    key={skill}
                                    className="rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-600"
                                >
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MentorProfile;