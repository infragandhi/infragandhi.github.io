import { ThemeProvider } from '@/components/theme-provider';
import Container from './components/container';

function App() {
	return (
		<ThemeProvider defaultTheme="system" storageKey="nt-cv-ui-theme">
			<Container />
		</ThemeProvider>
	);
}

export default App;
