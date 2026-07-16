import api from "./api";

export const chatWithAI = async (message) => {
    const { data } = await api.post(
        "/ai/chat",
        {
            message,
        }
    );

    return data;
};