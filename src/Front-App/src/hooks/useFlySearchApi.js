import axios from "axios";
import config from "react-global-configuration";

/**
 * The TuiFly.FlySearchApi Manager
 * @param {string} apiName // api config name
 * @returns {httpClient}
 * @example
 * const {getAirports} = useFlySearchApi()
 */
export default function useFlySearchApi() {
  const flySearchApi = axios.create({
    baseURL: config.get("flySearchApiUrl"),
  });
  const pageSize = 10;

  return {
    getAirports: async () => {
      try {
        const { data } = await flySearchApi.get("airports");
        return data;
      } catch (error) {
        return [];
      }
    },
    getFlightsList: async (filterQuery) => {
      const pageIndex = filterQuery.pageIndex === undefined ? 1 : filterQuery.pageIndex;

      const query = `fligths?departure=${filterQuery.departure}&arrival=${filterQuery.arrival}&departureDate=${filterQuery.departureDate}&returnDate=${filterQuery.returnDate}&passengerNumbers=${filterQuery.passengerNumbers}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
      try {
        const { data, status } = await flySearchApi.get(query);
        return status !== 200 ? {} : data;
      } catch (error) {
        return {};
      }
    },
  };
}
