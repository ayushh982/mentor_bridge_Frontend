import { Check, X } from "lucide-react";

const mentors = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        company: "Google",
        experience: "5 Years",
        skills: ["React", "Node.js", "MongoDB"],
    },
    {
        id: 2,
        name: "Priya Singh",
        email: "priya@gmail.com",
        company: "Microsoft",
        experience: "4 Years",
        skills: ["Java", "Spring Boot", "AWS"],
    },
];

const PendingMentors = () => {
    return (

        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Pending Mentor Requests
                </h1>

                <p className="mt-2 text-gray-500">
                    Approve or reject mentor verification requests.
                </p>

            </div>

            <div className="space-y-6">

                {mentors.map((mentor) => (

                    <div
                        key={mentor.id}
                        className="rounded-3xl border border-gray-200 bg-white p-6"
                    >

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                            <div>

                                <h2 className="text-xl font-semibold">
                                    {mentor.name}
                                </h2>

                                <p className="mt-1 text-gray-500">
                                    {mentor.email}
                                </p>

                                <p className="mt-1 text-gray-500">
                                    {mentor.company}
                                </p>

                                <p className="mt-1 text-gray-500">
                                    {mentor.experience}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">

                                    {mentor.skills.map((skill) => (

                                        <span
                                            key={skill}
                                            className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-600"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <button className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700">

                                    <Check size={18} />

                                    Approve

                                </button>

                                <button className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700">

                                    <X size={18} />

                                    Reject

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );
};

export default PendingMentors;