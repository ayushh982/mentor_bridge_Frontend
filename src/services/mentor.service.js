import api from "./api";

// Get all approved mentors
export const getAllMentors = async (params = {}) => {
    const { data } = await api.get("/mentors", {
        params,
    });

    return data;
};

// Get mentor details
export const getMentorById = async (mentorId) => {
    const { data } = await api.get(`/mentors/${mentorId}`);

    return data;
};

// Create mentor profile
export const createMentorProfile = async (profileData) => {
    const { data } = await api.post(
        "/mentors/profile",
        profileData
    );

    return data;
};

// Update mentor profile
export const updateMentorProfile = async (
    profileData
) => {
    const { data } = await api.put(
        "/mentors/profile",
        profileData
    );

    return data;
};

// Get logged in mentor profile
export const getMyMentorProfile = async () => {
    const { data } = await api.get(
        "/mentors/profile"
    );

    return data;
};