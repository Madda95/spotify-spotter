import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppWrapper from "../components/AppWrapper/AppWrapper.component";
import AuthorizationComponent from "../components/Authorization/Authorization.component";
import { ALL_ROUTES } from "./routesConfig";

export const AppRouter = () => (
    <Router>
        <AuthorizationComponent />
        <Switch>
            {ALL_ROUTES.map(
                ({ content: ComponentComponent, exact, path, withWrapper }) => (
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
