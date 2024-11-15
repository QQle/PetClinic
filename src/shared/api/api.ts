import axios from "axios";
import axiosRetry from "axios-retry";

export const baseUrl = "https://localhost:7018/api/";

export const $api = axios.create({
  baseURL: baseUrl,
});

axiosRetry($api, {
  retries: 1,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => error.response!.status > 400,
});
