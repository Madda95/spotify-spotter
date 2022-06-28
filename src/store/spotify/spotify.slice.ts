import { createSlice } from "@reduxjs/toolkit";
import { spotifyExtraReducer } from "./spotify.thunk";
import InitialState from "./spotiy.state";

export const { actions, reducer: spotifyReducer } = createSlice({
    name: "spotify",
    initialState: InitialState,
    reducers: {},
    extraReducers: spotifyExtraReducer,
});
