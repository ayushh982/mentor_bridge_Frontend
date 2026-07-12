import { useForm } from "react-hook-form";

const CompleteProfile = () => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (

        <section>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Complete Mentor Profile
                </h1>

                <p className="mt-2 text-gray-500">
                    Complete your profile to start accepting mentorship sessions.
                </p>

            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
            >

                <div className="rounded-3xl border border-gray-200 bg-white p-8">

                    <h2 className="mb-6 text-xl font-semibold">
                        Basic Information
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">

                        <input
                            {...register("company")}
                            placeholder="Company"
                            className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                        />

                        <input
                            {...register("designation")}
                            placeholder="Designation"
                            className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                        />

                        <input
                            type="number"
                            {...register("experience")}
                            placeholder="Experience (Years)"
                            className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                        />

                        <input
                            type="number"
                            {...register("pricing")}
                            placeholder="Session Price"
                            className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                        />

                    </div>

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8">

                    <h2 className="mb-6 text-xl font-semibold">
                        Professional Details
                    </h2>

                    <textarea
                        {...register("bio")}
                        rows={5}
                        placeholder="Bio"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                    />

                    <textarea
                        {...register("skills")}
                        rows={3}
                        placeholder="Skills (comma separated)"
                        className="mt-6 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                    />

                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-8">

                    <h2 className="mb-6 text-xl font-semibold">
                        Social Links
                    </h2>

                    <div className="space-y-5">

                        <input
                            {...register("linkedin")}
                            placeholder="LinkedIn URL"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                        />

                        <input
                            {...register("github")}
                            placeholder="GitHub URL"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                        />

                    </div>

                </div>

                <button
                    type="submit"
                    className="rounded-xl bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700"
                >
                    Save Profile
                </button>

            </form>

        </section>

    );

};

export default CompleteProfile;