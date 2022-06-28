import { Button, Input } from "@mui/material";
import React, { useCallback, useState } from "react";
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

    return (
        <div className={styles.container}>
            <Input
                className={className}
                placeholder={placeholder}
                fullWidth={fullWidth}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button
                variant="contained"
                className={styles.button}
                disabled={value.length === 0}
                onClick={handleSearch}
            >
                {buttonCta}
            </Button>
        </div>
    );
};

export default Searchbar;
