import { ThemeProvider } from '@/components/theme-provider';
import Container from './components/container';
//import { ThemeToggle } from "./components/theme-toggle"

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="nt-cv-ui-theme">
			<Container />
		</ThemeProvider>
	);
}

export default App;
