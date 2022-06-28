export interface ISpotifyArtistDto {
    external_urls: {
        spotify: string;
    };
    followers: {
        total: number;
    };
    gender: string[];
    href: string;
    id: string;
    images: Array<{
        url: string;
        height: number;
        width: number;
    }>;
    /** Name of artist **/
    name: string;
    popularity: number;
    type: string;
    /** The Spotify URI for the album. **/
    uri: string;
}
