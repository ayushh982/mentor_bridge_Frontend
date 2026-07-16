import api from "./api";

export const getPendingMentors = async () => {
    const { data } = await api.get(
        "/admin/pending-mentors"
    );

    return data;
};

export const approveMentor = async (mentorId) => {
    const { data } = await api.patch(
        `/admin/approve/${mentorId}`
    );

    return data;
};

export const rejectMentor = async (mentorId) => {
    const { data } = await api.patch(
        `/admin/reject/${mentorId}`
    );

    return data;
};

export const getAllUsers = async () => {
    const { data } = await api.get("/admin/users");
    return data;
};