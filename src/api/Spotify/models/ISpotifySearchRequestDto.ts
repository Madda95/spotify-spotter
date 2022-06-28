export interface ISpotifySearchRequestDto {
    q: string;
    type: "track";
    include_external?: "audio";
    limit: number;
    market?: "EN" | "IT";
    offset?: number;
}
