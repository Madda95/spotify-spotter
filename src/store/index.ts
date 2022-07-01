import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./root.reducer";
import { authorizationMiddlewere } from "./middlewares/authorization.middleware";
import { ISpotifyState } from "./spotify/spotiy.state";
import { INorificationState } from "./notification/notification.state";

export interface IGlobalState {
    spotify: ISpotifyState;
    notification: INorificationState;
}

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authorizationMiddlewere),
    reducer: combinedReducers,
});

export type AppDispatch = typeof store.dispatch;
