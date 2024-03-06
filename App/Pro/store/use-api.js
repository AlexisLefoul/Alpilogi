import axios from "axios";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const baseURL = "http://31.207.34.118:80/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Ajouter les méthodes get, post, put, delete à axiosInstance
axiosInstance.get = async (url, config) => {
  const { data } = await axiosInstance(url, { ...config, method: "get" });
  return data;
};

axiosInstance.post = async (url, data, config) => {
  const { data: responseData } = await axiosInstance(url, {
    ...config,
    method: "post",
    data,
  });
  return responseData;
};

axiosInstance.put = async (url, data, config) => {
  const { data: responseData } = await axiosInstance(url, {
    ...config,
    method: "put",
    data,
  });
  return responseData;
};

axiosInstance.delete = async (url, config) => {
  const { data } = await axiosInstance(url, { ...config, method: "delete" });
  return data;
};

const queryClient = new QueryClient();

export const useApi = (endpoint, options = {}) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoint, options);
      return data;
    },
  });
};

export const api = axiosInstance;

export const ApiProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
