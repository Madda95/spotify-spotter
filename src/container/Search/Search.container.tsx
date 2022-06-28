import { CircularProgress, Select, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Searchbar from "../../components/SearchBar/Searchbar.component";
import Track from "../../components/Track/Track.component";
import { SEARCH_LABELS } from "../../constants/lables";
import { useSpotify } from "../../hooks/useSpotify";
import { IGlobalState } from "../../store";
import styles from "./search.module.scss";

const SearchComponent: React.FC = () => {
    const { search } = useSpotify();
    const { tracks } = useSelector((state: IGlobalState) => state.spotify.data);
    const { loading } = useSelector((state: IGlobalState) => state.spotify);

    const performSearch = useCallback(
        (value: string) => {
            search({
                q: value,
                limit: 5,
                type: "track",
                offset: 0,
                market: "IT",
                include_external: "audio",
            });
        },
        [search]
    );

    return (
        <div className={styles.container}>
            <Typography variant="h2">{SEARCH_LABELS.TITLE}</Typography>
            <Searchbar
                placeholder="Cerca cantante o canzone"
                buttonCta="Cerca"
                onSearch={performSearch}
            />

            {loading && <CircularProgress className={styles.loader} />}

            {tracks != null && (
                <div>
                    <Typography variant="h4" mt={2} mb={2} color="white">
                        {tracks.items.length > 0
                            ? "Tracce correllate:"
                            : "Nessun risultato"}
                    </Typography>
                    <div className={styles.cardContainer}>
                        {tracks?.items?.map(
                            ({ album, artists, duration_ms, name, uri }) => (
                                <Track
                                    album_uri={album.uri}
                                    album_image={album.images[0]?.url}
                                    artist_name={artists?.[0].name}
                                    artist_id={artists?.[0].id}
                                    duration_ms={duration_ms}
                                    track_name={name}
                                    track_uri={uri}
                                />
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
