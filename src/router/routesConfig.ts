import { AVAILABLE_PATHS } from "../constants";
import { RouteComponentProps } from "react-router-dom";
import { lazy } from "react";

const LoginContainer = lazy(() => import("../container/Login/Login.container"));
const SearchScreen = lazy(() => import("../container/Search/Search.container"));

interface RouteConfig {
    path: AVAILABLE_PATHS;
    content:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    exact: boolean;
    withWrapper: boolean;
}

export const ALL_ROUTES: RouteConfig[] = [
    {
        path: AVAILABLE_PATHS.LOGIN,
        content: LoginContainer,
        exact: true,
        withWrapper: false,
    },
    {
        path: AVAILABLE_PATHS.HOME,
        content: SearchScreen,
        exact: true,
        withWrapper: true,
    },
];
