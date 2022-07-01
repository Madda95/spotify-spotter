import { composeQuery } from "../../../../utils/urls";
import { ISpotifySearchRequestDto } from "../../models/ISpotifySearchRequestDto";
import { IRequestsConfig } from "../root";

export const SpotifySearchConfig: { [key: string]: IRequestsConfig } = {
    search: {
        method: "get",
        path: () => `search`,
        queryString: (p: ISpotifySearchRequestDto) => composeQuery(p),
    },
} as const;
