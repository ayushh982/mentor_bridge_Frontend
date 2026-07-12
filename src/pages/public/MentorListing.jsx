import { Search, Star, Briefcase, MapPin } from "lucide-react";

const mentors = [
    {
        id: 1,
        name: "Rahul Sharma",
        company: "Google",
        role: "Senior Software Engineer",
        experience: "5 Years",
        rating: 4.9,
        price: 499,
        skills: ["React", "Node.js", "DSA"],
    },
    {
        id: 2,
        name: "Priya Singh",
        company: "Microsoft",
        role: "SDE II",
        experience: "4 Years",
        rating: 4.8,
        price: 399,
        skills: ["Java", "Spring Boot", "System Design"],
    },
];

const MentorListing = () => {
    return (

        <section className="mx-auto max-w-7xl px-6 py-16">

            <div className="mb-12">

                <h1 className="text-4xl font-bold">
                    Find Your Mentor
                </h1>

                <p className="mt-3 text-gray-500">
                    Learn from experienced professionals from top companies.
                </p>

            </div>

            <div className="mb-10 grid gap-4 md:grid-cols-4">

                <div className="relative md:col-span-2">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        placeholder="Search mentors..."
                        className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-indigo-600"
                    />

                </div>

                <select className="rounded-xl border border-gray-200 px-4 py-3">

                    <option>All Skills</option>

                    <option>React</option>

                    <option>Node.js</option>

                    <option>Java</option>

                </select>

                <select className="rounded-xl border border-gray-200 px-4 py-3">

                    <option>Sort By</option>

                    <option>Highest Rating</option>

                    <option>Lowest Price</option>

                </select>

            </div>

            <div className="grid gap-8 lg:grid-cols-2">

                {mentors.map((mentor) => (

                    <div
                        key={mentor.id}
                        className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:shadow-lg"
                    >

                        <div className="flex gap-5">

                            <img
                                src={`https://i.pravatar.cc/400?img=${mentor.id + 5}`}
                                alt={mentor.name}
                                className="h-24 w-24 rounded-full"
                            />

                            <div className="flex-1">

                                <div className="flex items-center justify-between">

                                    <h2 className="text-2xl font-semibold">
                                        {mentor.name}
                                    </h2>

                                    <span className="rounded-xl bg-indigo-50 px-3 py-2 text-indigo-600">
                                        ₹{mentor.price}
                                    </span>

                                </div>

                                <p className="mt-2 text-gray-500">
                                    {mentor.role}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-500">

                                    <span className="flex items-center gap-2">

                                        <Briefcase size={16} />

                                        {mentor.company}

                                    </span>

                                    <span className="flex items-center gap-2">

                                        <MapPin size={16} />

                                        {mentor.experience}

                                    </span>

                                    <span className="flex items-center gap-2">

                                        <Star
                                            size={16}
                                            className="fill-yellow-400 text-yellow-400"
                                        />

                                        {mentor.rating}

                                    </span>

                                </div>

                                <div className="mt-5 flex flex-wrap gap-2">

                                    {mentor.skills.map((skill) => (

                                        <span
                                            key={skill}
                                            className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-600"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                                <button className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">

                                    View Profile

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );
};

export default MentorListing;