import { AVAILABLE_PATHS } from "../../constants";

export const authorizationMiddlewere = (store) => (next) => (action) => {
    const isUnAuthorized = action?.error?.message?.includes("code 401");
    if (isUnAuthorized) {
        window.localStorage.removeItem("token");
        window.location.pathname = AVAILABLE_PATHS.LOGIN;
    }
    next(action);
};
