import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import i18n from '../i18n';

function LanguageSelector() {
	const storageKey = 'nt-cv-language';
	const [selectedLanguage] = useState<string>(() => (localStorage.getItem(storageKey) as string) || 'en');

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
		localStorage.setItem(storageKey, language);
	};

	return (
		<Select onValueChange={changeLanguage} defaultValue={selectedLanguage}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a language" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="en">English 🇬🇧</SelectItem>
				<SelectItem value="hu">Magyar 🇭🇺</SelectItem>
			</SelectContent>
		</Select>
	);
}

export default LanguageSelector;
