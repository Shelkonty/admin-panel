import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
    const token = useSelector((state) => state.global.token);
    const axiosInstance = axios.create({
        baseURL: "https://site-admin-server.vercel.app",
    });

    axiosInstance.interceptors.request.use((config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    return axiosInstance;
};

export default useAxios;
