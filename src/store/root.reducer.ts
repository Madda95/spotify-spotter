import { combineReducers } from "redux";
import { spotifyReducer } from "./spotify/spotify.slice";

export default combineReducers({
    spotify: spotifyReducer,
});
