import api from "./api";

export const createConversation = async (
    conversationData
) => {
    const { data } = await api.post(
        "/chat/conversation",
        conversationData
    );

    return data;
};

export const getConversations = async () => {
    const { data } = await api.get(
        "/chat/conversations"
    );

    return data;
};

export const getMessages = async (
    conversationId
) => {
    const { data } = await api.get(
        `/chat/messages/${conversationId}`
    );

    return data;
};