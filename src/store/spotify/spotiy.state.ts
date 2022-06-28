import { ISpotifyObjectResponse } from "../../api/Spotify/models/ISpotifyObjectResponse";
import { ISpotifyTrackDto } from "../../api/Spotify/models/ISpotifyTrackDto";

export interface ISpotifyState {
    data: {
        tracks: ISpotifyObjectResponse<ISpotifyTrackDto> | null;
    };
    loading: boolean;
}

const INITIAL_STATE: ISpotifyState = {
    data: {
        tracks: null,
    },
    loading: false,
};

export default INITIAL_STATE;
