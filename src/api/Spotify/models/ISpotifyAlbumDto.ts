export interface ISpotifyAlbumDto {
    /** The type of the album. **/
    album_type: "album" | "single" | "compilation";
    /** The number of tracks in the album. **/
    total_tracks: number;
    /** The markets in which the album is available: ISO 3166-1 alpha-2 country codes. NOTE: an album is considered available in a market when at least 1 of its tracks is available in that marke **/
    available_markets: string[];
    /** Known external URLs for this album. **/
    external_urls: {
        spotify: string;
    };
    /** A link to the Web API endpoint providing full details of the album. **/
    href: string;
    /** The Spotify ID for the album **/
    id: string;
    images: Array<{
        url: string;
        height: number;
        width: number;
    }>;
    /** Name of album **/
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    restrictions: {
        reason: "market" | "product" | "explicit";
    };
    type: string;
    /** The Spotify URI for the album. **/
    uri: string;
}
