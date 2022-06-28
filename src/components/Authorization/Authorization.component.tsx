import React, { useCallback, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { AVAILABLE_PATHS } from "../../constants";

const AuthorizationComponent = () => {
    const { hash } = useLocation();
    const { replace } = useHistory();

    const handleSpotifyLogin = useCallback(() => {
        let isTokenPresent = window.localStorage.getItem("token");
        if (!isTokenPresent && hash) {
            const token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1];

            window.localStorage.setItem("token", token);
            replace(AVAILABLE_PATHS.HOME);
            return;
        }

        if (!isTokenPresent) {
            replace(AVAILABLE_PATHS.LOGIN);
            return;
        }
    }, [hash, replace]);

    useEffect(() => {
        handleSpotifyLogin();
    }, [handleSpotifyLogin]);

    return null;
};

export default AuthorizationComponent;
