import { Link } from "@mui/material";
import React from "react";
import { calculateTime } from "../../utils/format";
import styles from "./track.module.scss";

interface ITrackProps {
    album_image: string;
    album_uri: string;
    artist_name: string;
    artist_uri: string;
    duration_ms: number;
    track_name: string;
    track_uri: string;
}

const Track: React.FC<ITrackProps> = ({
    album_uri,
    album_image,
    artist_name,
    artist_uri,
    duration_ms,
    track_name,
    track_uri,
}) => {
    const time = calculateTime(duration_ms);

    return (
        <div key={track_uri} className={styles.card}>
            <div className={styles.track}>
                <Link href={album_uri}>
                    <img src={album_image} alt={""} />
                </Link>
                <Link href={track_uri} className={styles.trackName}>
                    {track_name} ({time})
                </Link>
                <Link href={artist_uri} className={styles.artistName}>
                    {artist_name}
                </Link>
            </div>
        </div>
    );
};

export default Track;
