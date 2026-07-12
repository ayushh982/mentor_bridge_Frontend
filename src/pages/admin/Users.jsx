import { Search, UserCheck, UserX } from "lucide-react";

const users = [
    {
        id: 1,
        name: "Ayush Tiwari",
        email: "ayush@gmail.com",
        role: "Student",
        status: "Active",
    },
    {
        id: 2,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        role: "Mentor",
        status: "Active",
    },
    {
        id: 3,
        name: "Priya Singh",
        email: "priya@gmail.com",
        role: "Student",
        status: "Blocked",
    },
];

const AdminUsers = () => {
    return (
        <section>

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">
                        Users
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage all registered users.
                    </p>

                </div>

                <div className="relative w-80">

                    <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />

                    <input
                        placeholder="Search users..."
                        className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-indigo-600"
                    />

                </div>

            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">

                <table className="w-full">

                    <thead className="bg-slate-50">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                Name
                            </th>

                            <th className="px-6 py-4 text-left">
                                Email
                            </th>

                            <th className="px-6 py-4 text-left">
                                Role
                            </th>

                            <th className="px-6 py-4 text-left">
                                Status
                            </th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {users.map((user) => (

                            <tr
                                key={user.id}
                                className="border-t border-gray-100"
                            >

                                <td className="px-6 py-5 font-medium">
                                    {user.name}
                                </td>

                                <td className="px-6 py-5">
                                    {user.email}
                                </td>

                                <td className="px-6 py-5">
                                    {user.role}
                                </td>

                                <td className="px-6 py-5">

                                    <span
                                        className={`rounded-full px-3 py-1 text-sm ${
                                            user.status === "Active"
                                                ? "bg-green-50 text-green-600"
                                                : "bg-red-50 text-red-600"
                                        }`}
                                    >
                                        {user.status}
                                    </span>

                                </td>

                                <td className="px-6 py-5">

                                    <div className="flex justify-center gap-3">

                                        <button className="rounded-lg bg-green-600 p-2 text-white hover:bg-green-700">

                                            <UserCheck size={18} />

                                        </button>

                                        <button className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700">

                                            <UserX size={18} />

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>
    );
};

export default AdminUsers;