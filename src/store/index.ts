import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./root.reducer";
import { authorizationMiddlewere } from "./middlewere/authorization.middlewere";
import { ISpotifyState } from "./spotify/spotiy.state";

export interface IGlobalState {
    spotify: ISpotifyState;
}

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authorizationMiddlewere),
    reducer: combinedReducers,
});

export type AppDispatch = typeof store.dispatch;
