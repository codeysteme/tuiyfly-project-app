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

  return {
    getAirports: async () => {
      try {
        const { data } = await flySearchApi.get("airports");
        return data;
      } catch (error) {
        return [];
      }
    },
  };
}
