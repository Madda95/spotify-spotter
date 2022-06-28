import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { AppRouter } from "./router/routes";
import { store } from "./store";
import "./styles/index.scss";

const target = document.getElementById("root");

const run = () => {
    if (target == null) {
        throw new Error("Target not found in DOM");
    }

    const root = ReactDOM.createRoot(target);
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App>
                    <AppRouter />
                </App>
            </Provider>
        </React.StrictMode>
    );
};

run();
