import { Check, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import { useTranslation } from 'react-i18next';

interface ThemeCheckedProps {
	themeToCheck: string;
	label: string;
}

function ThemeChecked({ themeToCheck, label }: ThemeCheckedProps) {
	const { theme } = useTheme();

	return (
		<>
			{theme === themeToCheck && <Check className="h-4 w-4" />}
			<div className={theme === theme ? 'ml-2' : ''}>{label}</div>
		</>
	);
}

export function ThemeToggle() {
	const [t] = useTranslation();
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme('light')}>
					<ThemeChecked themeToCheck="light" label={t('theme.light')} />
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					<ThemeChecked themeToCheck="dark" label={t('theme.dark')} />
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					<ThemeChecked themeToCheck="system" label={t('theme.system')} />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
