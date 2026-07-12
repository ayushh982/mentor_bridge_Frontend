import {
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    Pencil,
} from "lucide-react";

const Profile = () => {
    return (

        <section>

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">
                        My Profile
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage your personal information.
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
                        src="https://i.pravatar.cc/200?img=15"
                        alt="profile"
                        className="mx-auto h-36 w-36 rounded-full"
                    />

                    <h2 className="mt-6 text-center text-2xl font-bold">
                        Ayush Tiwari
                    </h2>

                    <p className="mt-2 text-center text-gray-500">
                        Computer Science Student
                    </p>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 lg:col-span-2">

                    <h2 className="text-2xl font-semibold">
                        Personal Information
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">

                        <div className="flex gap-4">

                            <Mail className="text-indigo-600" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Email
                                </p>

                                <p>
                                    ayush@gmail.com
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

                            <MapPin className="text-indigo-600" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Location
                                </p>

                                <p>
                                    Bhopal, MP
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <GraduationCap className="text-indigo-600" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    College
                                </p>

                                <p>
                                    UIT RGPV
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default Profile;