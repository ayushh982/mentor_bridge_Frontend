import { Send } from "lucide-react";

const conversations = [
    {
        id: 1,
        name: "Ayush Tiwari",
        lastMessage: "Thank you for today's session!",
        online: true,
    },
    {
        id: 2,
        name: "Rahul Gupta",
        lastMessage: "Can we reschedule tomorrow?",
        online: false,
    },
];

const messages = [
    {
        id: 1,
        sender: "student",
        text: "Hello Sir!",
    },
    {
        id: 2,
        sender: "mentor",
        text: "Hello Ayush, how are you?",
    },
    {
        id: 3,
        sender: "student",
        text: "I'm preparing for interviews.",
    },
];

const MentorChat = () => {
    return (

        <section className="flex h-[calc(100vh-120px)] overflow-hidden rounded-3xl border border-gray-200 bg-white">

            <aside className="w-80 border-r border-gray-200">

                <div className="border-b border-gray-200 p-6">

                    <h2 className="text-xl font-semibold">
                        Students
                    </h2>

                </div>

                <div className="space-y-2 p-4">

                    {conversations.map((chat) => (

                        <div
                            key={chat.id}
                            className="cursor-pointer rounded-2xl border border-gray-100 p-4 transition hover:bg-slate-50"
                        >

                            <div className="flex items-center justify-between">

                                <h3 className="font-semibold">
                                    {chat.name}
                                </h3>

                                <span
                                    className={`h-3 w-3 rounded-full ${
                                        chat.online
                                            ? "bg-green-500"
                                            : "bg-gray-300"
                                    }`}
                                />

                            </div>

                            <p className="mt-2 text-sm text-gray-500">
                                {chat.lastMessage}
                            </p>

                        </div>

                    ))}

                </div>

            </aside>

            <div className="flex flex-1 flex-col">

                <div className="border-b border-gray-200 p-6">

                    <h2 className="text-xl font-semibold">
                        Ayush Tiwari
                    </h2>

                </div>

                <div className="flex-1 space-y-5 overflow-y-auto p-6">

                    {messages.map((message) => (

                        <div
                            key={message.id}
                            className={`flex ${
                                message.sender === "mentor"
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >

                            <div
                                className={`max-w-md rounded-2xl px-5 py-3 ${
                                    message.sender === "mentor"
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
                            type="text"
                            placeholder="Type a message..."
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

export default MentorChat;