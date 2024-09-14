import Header from './header';
import LanguageSelector from './language-selector';
import Content from './content';
import { ThemeToggle } from './theme-toggle';

function Container() {
	return (
		<div className="grid grid-cols-1 laptop:grid-cols-[20%_80%] h-dvh">
			<div className="bg-gradient-to-b laptop:bg-gradient-to-r from-amber-600 via-orange-200 to-white dark:from-teal-800 dark:slate-700">
				<div className="flex flex-row ml-4">
					<ThemeToggle />
					<div className="ml-4">
						<LanguageSelector />
					</div>
				</div>
				<Header />
			</div>
			<Content />
		</div>
	);
}

export default Container;
