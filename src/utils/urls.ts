import qs from "query-string";

export function composeQuery<T extends Record<string, any>>(params: T): string {
    return qs.stringify(params, { arrayFormat: "comma", encode: true });
}
