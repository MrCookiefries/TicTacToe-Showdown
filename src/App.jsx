import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Game from "./Game";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<h1>tic tac toe</h1>
			<Game />
		</ThemeProvider>
	);
};

export default App;
