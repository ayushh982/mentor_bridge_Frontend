import {
    IndianRupee,
    TrendingUp,
    Wallet,
} from "lucide-react";

const transactions = [
    {
        id: "TXN001",
        student: "Ayush Tiwari",
        amount: 499,
        date: "12 July 2026",
    },
    {
        id: "TXN002",
        student: "Rahul Gupta",
        amount: 799,
        date: "14 July 2026",
    },
    {
        id: "TXN003",
        student: "Priya Sharma",
        amount: 399,
        date: "18 July 2026",
    },
];

const MentorEarnings = () => {

    return (

        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Earnings
                </h1>

                <p className="mt-2 text-gray-500">
                    Track your income and recent transactions.
                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

                <div className="rounded-3xl border border-gray-200 bg-white p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500">
                                Total Earnings
                            </p>

                            <h2 className="mt-3 text-3xl font-bold">
                                ₹18,450
                            </h2>

                        </div>

                        <div className="rounded-2xl bg-indigo-50 p-4">

                            <IndianRupee
                                className="text-indigo-600"
                            />

                        </div>

                    </div>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500">
                                This Month
                            </p>

                            <h2 className="mt-3 text-3xl font-bold">
                                ₹6,850
                            </h2>

                        </div>

                        <div className="rounded-2xl bg-green-50 p-4">

                            <TrendingUp
                                className="text-green-600"
                            />

                        </div>

                    </div>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500">
                                Available Balance
                            </p>

                            <h2 className="mt-3 text-3xl font-bold">
                                ₹2,400
                            </h2>

                        </div>

                        <div className="rounded-2xl bg-yellow-50 p-4">

                            <Wallet
                                className="text-yellow-600"
                            />

                        </div>

                    </div>

                </div>

            </div>

            <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6">

                <h2 className="text-xl font-semibold">
                    Recent Transactions
                </h2>

                <div className="mt-6 overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b border-gray-200">

                                <th className="py-4 text-left">
                                    Transaction ID
                                </th>

                                <th className="py-4 text-left">
                                    Student
                                </th>

                                <th className="py-4 text-left">
                                    Date
                                </th>

                                <th className="py-4 text-right">
                                    Amount
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {transactions.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-b border-gray-100"
                                >

                                    <td className="py-5">
                                        {item.id}
                                    </td>

                                    <td>
                                        {item.student}
                                    </td>

                                    <td>
                                        {item.date}
                                    </td>

                                    <td className="text-right font-semibold text-green-600">
                                        + ₹{item.amount}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </section>

    );

};

export default MentorEarnings;