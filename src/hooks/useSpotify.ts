import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ISpotifySearchRequestDto } from "../api/Spotify/models/ISpotifySearchRequestDto";
import {
    AUTH_ENDPOINT,
    REDIRECT_URI,
    RESPONSE_TYPE,
    SPOTIFY_CLIENT_ID,
} from "../config";
import { AppDispatch } from "../store";
import { spotifyThunk } from "../store/spotify/spotify.thunk";

export function useSpotify() {
    const dispatch = useDispatch<AppDispatch>();
    const loginUrl = `${`${AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}`;

    const search = useCallback(
        (args: ISpotifySearchRequestDto) => {
            dispatch(spotifyThunk.getSearch(args));
        },
        [dispatch]
    );

    return {
        loginUrl,
        search,
    };
}
