import axios, { AxiosRequestConfig, ResponseType } from "axios";
import { BASE_URL } from "../config";

const client = axios.create({
    baseURL: BASE_URL,
});

type AxiosParameters<P> = {
    url: string;
    method: "post" | "get" | "put" | "delete";
    responseType: ResponseType;
    payload?: P;
    options?: Partial<AxiosRequestConfig>;
    headers?: any;
};

export async function axiosClient<T, P = unknown>(
    params: AxiosParameters<P>
): Promise<T> {
    const response = await client.request<T, T>({
        methos: params.method,
        url: params.url,
        data: params.payload,
        responseType: params.responseType ?? "json",
        headers: params.headers ?? {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
        ...params.options,
    });
    return response;
}
