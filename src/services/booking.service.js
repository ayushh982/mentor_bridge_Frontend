import api from "./api";

// Book a session
export const bookSession = async (bookingData) => {
    const { data } = await api.post(
        "/bookings",
        bookingData
    );

    return data;
};

// Get logged in student's bookings
export const getMyBookings = async () => {
    const { data } = await api.get(
        "/bookings/my-bookings"
    );

    return data;
};

// Cancel booking
export const cancelBooking = async (
    bookingId
) => {
    const { data } = await api.patch(
        `/bookings/${bookingId}/cancel`
    );

    return data;
};

// Reschedule booking
export const rescheduleBooking = async (
    bookingId,
    bookingData
) => {
    const { data } = await api.patch(
        `/bookings/${bookingId}/reschedule`,
        bookingData
    );

    return data;
};