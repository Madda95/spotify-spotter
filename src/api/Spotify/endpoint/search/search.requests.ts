import { axiosClient } from "../../..";
import { IGlobalState } from "../../../../store";
import { ISpotifySearchRequestDto } from "../../models/ISpotifySearchRequestDto";
import { SpotifySearchConfig } from "./search.config";

const search = async (query: ISpotifySearchRequestDto) => {
    const { method, path, queryString } = SpotifySearchConfig.search;
    const response = axiosClient<IGlobalState["spotify"]>({
        method,
        responseType: "json",
        url: `${path()}?${queryString(query)}`,
    });
    return response;
};

export { search };
