import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import hu from './translations/hu.json';

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
	lng: (localStorage.getItem('nt-cv-language') as string) || 'en',
	fallbackLng: 'en',
});

export default i18n;
