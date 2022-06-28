import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/themes";

const App = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default App;
