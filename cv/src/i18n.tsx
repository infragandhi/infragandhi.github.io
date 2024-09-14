import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import hu from './translations/hu.json';
import { languageKey } from './keys';

const resources = {
	en: {
		translation: en,
	},
	hu: {
		translation: hu,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: (localStorage.getItem(languageKey) as string) || 'en',
	fallbackLng: 'en',
});

export default i18n;
