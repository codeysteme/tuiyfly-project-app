import axios from "axios";
import config from "react-global-configuration";

/**
 * The TuiFly.BookingApi Manager
 * @returns {httpClient}
 * @example
 * const {saveBooking} = useBookingApi()
 */
export default function useBookingApi() {
  const bookingApi = axios.create({
    baseURL: `${config.get("bookingApiUrl")}/api`,
  });

  return {
    saveBooking: async (requestBody) => bookingApi.post("bookings", requestBody),
    getBookings: async () => {
      try {
        const { data } = await bookingApi.get("bookings");
        return data;
      } catch (error) {
        return [];
      }
    },
  };
}
