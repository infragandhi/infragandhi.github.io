import Header from './header';
import LanguageSelector from './language-selector';
import Content from './content';
import { ThemeToggle } from './theme-toggle';

function Container() {
	return (
		<div className="grid grid-cols-1 laptop:desktop:grid-cols-[20%_80%] h-dvh">
			<div className="grid grid-cols-subgrid grid-cols-1">
				<div className="bg-lime-200 dark:bg-teal-800">
					<div className="flex flex-row">
						<ThemeToggle />
						<div className="ml-4">
							<LanguageSelector />
						</div>
					</div>
					<Header />
				</div>
			</div>
			<div className="grid grid-sub-grid grid-cols-1">
				<Content />
			</div>
		</div>
	);
}

export default Container;
