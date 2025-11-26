import connectDB from "@/lib/mongodb";
import Booking from "@/databases/bookings";

export const createBooking = async ({ eventId, slug, email }: { eventId: string; slug: string; email: string }) => {
    try {
        await connectDB();
        const booking = await Booking.create({ eventId, slug, email });

        return { success: true, booking };
    } catch (e) {
        console.error('Create booking failed', e);
        return { success: false };
    }
}