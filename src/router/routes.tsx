import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppWrapper from "../components/AppWrapper/AppWrapper.component";
import AuthorizationComponent from "../components/Authorization/Authorization.component";
import { IGlobalState } from "../store";
import { ALL_ROUTES } from "./routesConfig";
export const AppRouter = () => {
    const notification = useSelector(
        (state: IGlobalState) => state.notification
    );

    return (
        <Router>
            <AuthorizationComponent />
            {notification.type && (
                <Alert severity={notification.type}>
                    {notification.message}
                </Alert>
            )}
            <Switch>
                {ALL_ROUTES.map(
                    ({
                        content: ComponentComponent,
                        exact,
                        path,
                        withWrapper,
                    }) => (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={(props) => {
                                if (withWrapper) {
                                    return (
                                        <AppWrapper>
                                            <ComponentComponent {...props} />
                                        </AppWrapper>
                                    );
                                }

                                return <ComponentComponent {...props} />;
                            }}
                        />
                    )
                )}
            </Switch>
        </Router>
    );
};
