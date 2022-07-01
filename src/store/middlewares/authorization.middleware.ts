import { AVAILABLE_PATHS, REDIRECT_TIMEOUT } from "../../constants";
import { NOTIFICATION_MESSAGE } from "../../constants/lables";
import { notificationActions } from "../notification/notification.slice";

export const authorizationMiddlewere =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        const isUnAuthorized = action?.error?.message?.includes("code 401");
        if (isUnAuthorized) {
            window.localStorage.removeItem("token");
            dispatch(
                notificationActions.setMessage({
                    message: NOTIFICATION_MESSAGE.TOKEN_EXPIRED,
                    type: "error",
                })
            );
            setTimeout(() => {
                window.location.href = AVAILABLE_PATHS.LOGIN;
            }, REDIRECT_TIMEOUT);
        }
        next(action);
    };
