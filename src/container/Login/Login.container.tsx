import { Button, Card, Typography } from "@mui/material";
import { LOGIN_LABELS } from "../../constants/lables";
import { useSpotify } from "../../hooks/useSpotify";
import spotify_logo from "../../assets/logo.png";
import styles from "./login.module.scss";

const LoginContainer: React.FC = () => {
    const { loginUrl } = useSpotify();
    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <img src={spotify_logo} className={styles.logo} alt="Logo" />
                <Typography gutterBottom variant="h5" mb={2}>
                    {LOGIN_LABELS.CAPTION}
                </Typography>
                <Button href={loginUrl} size="large" variant="contained">
                    {LOGIN_LABELS.BUTTON}
                </Button>
            </Card>
        </div>
    );
};

export default LoginContainer;
