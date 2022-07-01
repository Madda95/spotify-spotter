import { Button, Input } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./searchbar.module.scss";

interface ISearchBarProps {
    placeholder?: string;
    fullWidth?: boolean;
    className?: string;
    buttonCta: string;
    onSearch?: (value: string) => void;
}

const Searchbar: React.FC<ISearchBarProps> = ({
    placeholder,
    fullWidth = true,
    className,
    buttonCta,
    onSearch,
}) => {
    const [value, setValue] = useState("");

    const handleSearch = useCallback(() => {
        onSearch?.(value);
    }, [value, onSearch]);

    const keyboardEventOnSearch = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Enter" && value?.length > 0) {
                onSearch?.(value);
            }
        },
        [onSearch, value]
    );

    useEffect(() => {
        const target = document.getElementById("spotify-search");
        target.addEventListener("keyup", keyboardEventOnSearch);
        return () => target.removeEventListener("keyup", keyboardEventOnSearch);
    }, [keyboardEventOnSearch]);

    return (
        <div className={styles.container}>
            <Input
                className={className}
                placeholder={placeholder}
                fullWidth={fullWidth}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id="spotify-search"
            />
            <Button
                variant="contained"
                className={styles.button}
                disabled={value.length === 0}
                onClick={handleSearch}
                color="primary"
            >
                {buttonCta}
            </Button>
        </div>
    );
};

export default Searchbar;
