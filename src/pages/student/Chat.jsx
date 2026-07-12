import { Send } from "lucide-react";

const messages = [
    {
        id: 1,
        sender: "mentor",
        text: "Hello Ayush! How can I help you today?",
    },
    {
        id: 2,
        sender: "student",
        text: "Can we discuss my resume tomorrow?",
    },
];

const Chat = () => {
    return (

        <section className="flex h-[calc(100vh-120px)] overflow-hidden rounded-3xl border border-gray-200 bg-white">

            <aside className="w-80 border-r border-gray-200">

                <div className="border-b border-gray-200 p-6">

                    <h2 className="text-xl font-semibold">
                        Chats
                    </h2>

                </div>

                <div className="p-4">

                    <div className="cursor-pointer rounded-2xl bg-slate-50 p-4">

                        <h3 className="font-semibold">
                            Rahul Sharma
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Google
                        </p>

                    </div>

                </div>

            </aside>

            <div className="flex flex-1 flex-col">

                <div className="border-b border-gray-200 p-6">

                    <h2 className="text-xl font-semibold">
                        Rahul Sharma
                    </h2>

                </div>

                <div className="flex-1 space-y-5 overflow-y-auto p-6">

                    {messages.map((message) => (

                        <div
                            key={message.id}
                            className={`flex ${
                                message.sender === "student"
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >

                            <div
                                className={`max-w-md rounded-2xl px-5 py-3 ${
                                    message.sender === "student"
                                        ? "bg-indigo-600 text-white"
                                        : "bg-slate-100"
                                }`}
                            >

                                {message.text}

                            </div>

                        </div>

                    ))}

                </div>

                <div className="border-t border-gray-200 p-5">

                    <div className="flex gap-4">

                        <input
                            placeholder="Type your message..."
                            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-600"
                        />

                        <button className="rounded-xl bg-indigo-600 px-5 text-white hover:bg-indigo-700">

                            <Send size={20} />

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default Chat;