import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import i18n from '../i18n';
import { languageKey } from '@/keys';

function LanguageSelector() {
	const [selectedLanguage] = useState<string>(() => (localStorage.getItem(languageKey) as string) || 'en');

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
		localStorage.setItem(languageKey, language);
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
