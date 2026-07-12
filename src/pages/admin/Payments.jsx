import {
    CheckCircle,
    Clock3,
    IndianRupee,
    XCircle,
    Eye,
} from "lucide-react";

const payments = [
    {
        id: "PAY001",
        student: "Ayush Tiwari",
        mentor: "Rahul Sharma",
        amount: 499,
        date: "15 July 2026",
        status: "Success",
    },
    {
        id: "PAY002",
        student: "Rahul Gupta",
        mentor: "Priya Singh",
        amount: 799,
        date: "17 July 2026",
        status: "Pending",
    },
    {
        id: "PAY003",
        student: "Aman Verma",
        mentor: "Vikas Kumar",
        amount: 399,
        date: "20 July 2026",
        status: "Failed",
    },
];

const AdminPayments = () => {

    const getStatus = (status) => {

        switch (status) {

            case "Success":
                return {
                    icon: CheckCircle,
                    className: "bg-green-50 text-green-600",
                };

            case "Pending":
                return {
                    icon: Clock3,
                    className: "bg-yellow-50 text-yellow-600",
                };

            default:
                return {
                    icon: XCircle,
                    className: "bg-red-50 text-red-600",
                };

        }

    };

    return (

        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Payments
                </h1>

                <p className="mt-2 text-gray-500">
                    Monitor all platform transactions.
                </p>

            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">

                <table className="w-full">

                    <thead className="bg-slate-50">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                Payment ID
                            </th>

                            <th className="px-6 py-4 text-left">
                                Student
                            </th>

                            <th className="px-6 py-4 text-left">
                                Mentor
                            </th>

                            <th className="px-6 py-4 text-left">
                                Amount
                            </th>

                            <th className="px-6 py-4 text-left">
                                Date
                            </th>

                            <th className="px-6 py-4 text-left">
                                Status
                            </th>

                            <th className="px-6 py-4 text-center">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {payments.map((payment) => {

                            const status = getStatus(payment.status);

                            const Icon = status.icon;

                            return (

                                <tr
                                    key={payment.id}
                                    className="border-t border-gray-100"
                                >

                                    <td className="px-6 py-5 font-medium">
                                        {payment.id}
                                    </td>

                                    <td className="px-6 py-5">
                                        {payment.student}
                                    </td>

                                    <td className="px-6 py-5">
                                        {payment.mentor}
                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="flex items-center">

                                            <IndianRupee
                                                size={16}
                                            />

                                            {payment.amount}

                                        </span>

                                    </td>

                                    <td className="px-6 py-5">
                                        {payment.date}
                                    </td>

                                    <td className="px-6 py-5">

                                        <span
                                            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium ${status.className}`}
                                        >

                                            <Icon size={16} />

                                            {payment.status}

                                        </span>

                                    </td>

                                    <td className="px-6 py-5 text-center">

                                        <button className="rounded-xl bg-indigo-600 p-3 text-white hover:bg-indigo-700">

                                            <Eye size={18} />

                                        </button>

                                    </td>

                                </tr>

                            );

                        })}

                    </tbody>

                </table>

            </div>

        </section>

    );

};

export default AdminPayments;