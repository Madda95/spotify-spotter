import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { IGlobalState } from "..";
import { ISpotifySearchRequestDto } from "../../api/Spotify/models/ISpotifySearchRequestDto";
import { ISpotifyState } from "./spotiy.state";
import * as SpotifyApi from "../../api/Spotify/endpoint/search/search.requests";
import { ISpotifyObjectResponse } from "../../api/Spotify/models/ISpotifyObjectResponse";
import { ISpotifyTrackDto } from "../../api/Spotify/models/ISpotifyTrackDto";

const getSearch = createAsyncThunk<
    {
        data: {
            tracks: ISpotifyObjectResponse<ISpotifyTrackDto>;
        };
    },
    ISpotifySearchRequestDto,
    { state: IGlobalState }
>("spotify/search", async (args) => {
    const response = await SpotifyApi.search(args);
    return response;
});

export const spotifyExtraReducer = (
    builder: ActionReducerMapBuilder<ISpotifyState>
) => {
    builder.addCase(getSearch.pending, (state) => {
        state.data.tracks = null;
        state.loading = true;
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.data.tracks = action.payload.data.tracks;
    });
    builder.addCase(getSearch.rejected, (state) => {
        state.loading = false;
        state.data = null;
    });
};

export const spotifyThunk = {
    getSearch,
};
