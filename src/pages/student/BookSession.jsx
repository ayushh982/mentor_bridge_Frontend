import { CalendarDays, Clock, IndianRupee } from "lucide-react";

const slots = [
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM",
];

const BookSession = () => {
    return (
        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Book Session
                </h1>

                <p className="mt-2 text-gray-500">
                    Schedule your mentorship session.
                </p>

            </div>

            <div className="grid gap-8 lg:grid-cols-3">

                <div className="space-y-8 lg:col-span-2">

                    <div className="rounded-3xl border border-gray-200 bg-white p-6">

                        <h2 className="text-xl font-semibold">
                            Mentor
                        </h2>

                        <div className="mt-6 flex items-center gap-5">

                            <img
                                src="https://i.pravatar.cc/120?img=12"
                                alt="mentor"
                                className="h-20 w-20 rounded-full"
                            />

                            <div>

                                <h3 className="text-xl font-semibold">
                                    Rahul Sharma
                                </h3>

                                <p className="text-gray-500">
                                    Senior Software Engineer • Google
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-white p-6">

                        <h2 className="text-xl font-semibold">
                            Select Date
                        </h2>

                        <input
                            type="date"
                            className="mt-5 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
                        />

                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-white p-6">

                        <h2 className="text-xl font-semibold">
                            Available Slots
                        </h2>

                        <div className="mt-6 flex flex-wrap gap-4">

                            {slots.map((slot) => (

                                <button
                                    key={slot}
                                    className="rounded-xl border border-gray-200 px-5 py-3 transition hover:border-indigo-600 hover:text-indigo-600"
                                >
                                    {slot}
                                </button>

                            ))}

                        </div>

                    </div>

                </div>

                <div>

                    <div className="sticky top-8 rounded-3xl border border-gray-200 bg-white p-6">

                        <h2 className="text-xl font-semibold">
                            Booking Summary
                        </h2>

                        <div className="mt-8 space-y-5">

                            <div className="flex items-center justify-between">

                                <span className="text-gray-500">
                                    Session
                                </span>

                                <span>
                                    30 Minutes
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-gray-500">
                                    Date
                                </span>

                                <span>
                                    --
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-gray-500">
                                    Time
                                </span>

                                <span>
                                    --
                                </span>

                            </div>

                            <hr />

                            <div className="flex items-center justify-between text-lg font-semibold">

                                <span>Total</span>

                                <span className="flex items-center">

                                    <IndianRupee size={18} />

                                    499

                                </span>

                            </div>

                        </div>

                        <button className="mt-8 w-full rounded-xl bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-700">

                            Continue to Payment

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BookSession;