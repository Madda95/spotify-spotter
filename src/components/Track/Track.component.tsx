import { Card, Link } from "@mui/material";
import React from "react";
import { calculateTime } from "../../utils/format";
import styles from "./track.module.scss";
import { Link as RouterLink } from "react-router-dom";
import { AVAILABLE_PATHS } from "../../constants";

interface ITrackProps {
    album_image: string;
    album_uri: string;
    artist_name: string;
    artist_id: string;
    duration_ms: number;
    track_name: string;
    track_uri: string;
}

const Track: React.FC<ITrackProps> = ({
    album_uri,
    album_image,
    artist_name,
    artist_id,
    duration_ms,
    track_name,
    track_uri,
}) => {
    const time = calculateTime(duration_ms);

    return (
        <Card key={track_uri} className={styles.card}>
            <div className={styles.track}>
                <Link href={album_uri}>
                    <img src={album_image} alt={""} />
                </Link>
                <Link href={track_uri} className={styles.trackName}>
                    {track_name}
                </Link>
                <div className={styles.time}>{time}</div>
                <RouterLink
                    to={AVAILABLE_PATHS.ARTIST.replace(":id", artist_id)}
                    className={styles.artistName}
                >
                    {artist_name}
                </RouterLink>
            </div>
        </Card>
    );
};

export default Track;
