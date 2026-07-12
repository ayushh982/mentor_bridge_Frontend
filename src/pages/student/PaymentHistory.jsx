import { CheckCircle, Clock3, IndianRupee, XCircle } from "lucide-react";

const payments = [
    {
        id: "PAY001",
        mentor: "Rahul Sharma",
        amount: 499,
        date: "12 July 2026",
        status: "Success",
    },
    {
        id: "PAY002",
        mentor: "Priya Singh",
        amount: 399,
        date: "18 July 2026",
        status: "Pending",
    },
    {
        id: "PAY003",
        mentor: "Ankit Verma",
        amount: 599,
        date: "22 July 2026",
        status: "Failed",
    },
];

const PaymentHistory = () => {

    const getStatus = (status) => {

        if (status === "Success") {
            return {
                icon: CheckCircle,
                className: "text-green-600 bg-green-50",
            };
        }

        if (status === "Pending") {
            return {
                icon: Clock3,
                className: "text-yellow-600 bg-yellow-50",
            };
        }

        return {
            icon: XCircle,
            className: "text-red-600 bg-red-50",
        };
    };

    return (

        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Payment History
                </h1>

                <p className="mt-2 text-gray-500">
                    View all your completed and pending payments.
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
                                        {payment.mentor}
                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="flex items-center">

                                            <IndianRupee size={16} />

                                            {payment.amount}

                                        </span>

                                    </td>

                                    <td className="px-6 py-5">
                                        {payment.date}
                                    </td>

                                    <td className="px-6 py-5">

                                        <span
                                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${status.className}`}
                                        >

                                            <Icon size={16} />

                                            {payment.status}

                                        </span>

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

export default PaymentHistory;