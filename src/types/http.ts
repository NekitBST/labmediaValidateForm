export type HttpMethod = "GET" | "POST";

export interface HttpOptions {
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: any;
}

export interface HttpState<T = any> {
    data: T | null
    status: number | null
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
}