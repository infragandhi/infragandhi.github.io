import { ThemeProvider } from '@/components/theme-provider';
import Container from './components/container';
import { uiThemeKey } from './keys';

function App() {
	return (
		<ThemeProvider defaultTheme="system" storageKey={uiThemeKey}>
			<Container />
		</ThemeProvider>
	);
}

export default App;
