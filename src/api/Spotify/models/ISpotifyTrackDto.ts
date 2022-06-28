import { ISpotifyAlbumDto } from "./ISpotifyAlbumDto";
import { ISpotifyArtistDto } from "./ISpotifyArtistDto";

export interface ISpotifyTrackDto {
    album: ISpotifyAlbumDto;
    artists: ISpotifyArtistDto[];
    /** The markets in which the album is available: ISO 3166-1 alpha-2 country codes. NOTE: an album is considered available in a market when at least 1 of its tracks is available in that marke **/
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    name: string;
    external_ids: any;
    external_urls: {
        spotify: string;
    };
    href: string;
    /** The Spotify ID for the track **/
    id: string;
    is_playable: boolean;

    linked_from: any;
    preview_url: string;
    uri: string;
}
