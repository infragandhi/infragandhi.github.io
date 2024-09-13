import { Check, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import { useTranslation } from 'react-i18next';

export function ThemeToggle() {
	const [t] = useTranslation();
	const { theme, setTheme } = useTheme();

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
					{theme === 'light' && <Check className="h-4 w-4" />}
					<div className={theme === 'light' ? 'ml-2' : ''}>{t('theme.light')}</div>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					{theme === 'dark' && <Check className="h-4 w-4" />}
					<div className={theme === 'dark' ? 'ml-2' : ''}>{t('theme.dark')}</div>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					{theme === 'system' && <Check className="h-4 w-4" />}
					<div className={theme === 'system' ? 'ml-2' : ''}>{t('theme.system')}</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
