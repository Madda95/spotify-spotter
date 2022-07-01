import { combineReducers } from "redux";
import { notificationReducer } from "./notification/notification.slice";
import { spotifyReducer } from "./spotify/spotify.slice";

export default combineReducers({
    spotify: spotifyReducer,
    notification: notificationReducer,
});
