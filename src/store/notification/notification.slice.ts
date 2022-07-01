import { createSlice } from "@reduxjs/toolkit";
import { IMessage, initialState } from "./notification.state";

export const { actions: notificationActions, reducer: notificationReducer } =
    createSlice({
        initialState: initialState,
        name: "notification",
        reducers: {
            clear: (state) => {
                state.message = "";
                state.type = null;
            },
            setMessage: (state, action: { payload: IMessage }) => {
                const payload = action.payload;
                state.message = payload.message;
                state.type = payload.type;
            },
        },
    });
