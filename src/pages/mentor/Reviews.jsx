import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        student: "Ayush Tiwari",
        rating: 5,
        date: "12 July 2026",
        comment:
            "Excellent mentor. Explained React concepts clearly and provided a proper roadmap.",
    },
    {
        id: 2,
        student: "Rahul Gupta",
        rating: 4,
        date: "15 July 2026",
        comment:
            "Very helpful session on backend development. Cleared all my doubts.",
    },
    {
        id: 3,
        student: "Priya Sharma",
        rating: 5,
        date: "18 July 2026",
        comment:
            "Great interview preparation session. Learned a lot of practical tips.",
    },
];

const MentorReviews = () => {
    return (
        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Reviews
                </h1>

                <p className="mt-2 text-gray-500">
                    Feedback received from your students.
                </p>

            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-3">

                <div className="rounded-3xl border border-gray-200 bg-white p-6">

                    <p className="text-gray-500">
                        Average Rating
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        4.9
                    </h2>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6">

                    <p className="text-gray-500">
                        Total Reviews
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        124
                    </h2>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6">

                    <p className="text-gray-500">
                        Recommendation Rate
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        98%
                    </h2>

                </div>

            </div>

            <div className="space-y-6">

                {reviews.map((review) => (

                    <div
                        key={review.id}
                        className="rounded-3xl border border-gray-200 bg-white p-6"
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <h2 className="text-lg font-semibold">
                                    {review.student}
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    {review.date}
                                </p>

                            </div>

                            <div className="flex">

                                {[...Array(review.rating)].map((_, index) => (

                                    <Star
                                        key={index}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />

                                ))}

                            </div>

                        </div>

                        <p className="mt-5 leading-7 text-gray-600">
                            {review.comment}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default MentorReviews;