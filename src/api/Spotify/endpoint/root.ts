export interface IRequestsConfig {
    method: "get" | "delete" | "post" | "put";
    path: () => string;
    queryString?: (p: any) => string;
}
