import { axiosClient } from "../../..";
import { ISpotifySearchRequestDto } from "../../models/ISpotifySearchRequestDto";
import { SpotifySearchConfig } from "./search.config";

const search = async (query: ISpotifySearchRequestDto) => {
    const { method, path, queryString } = SpotifySearchConfig.search;
    const response = axiosClient<any>({
        method,
        responseType: "json",
        url: `${path()}?${queryString(query)}`,
    });
    return response;
};

export { search };
