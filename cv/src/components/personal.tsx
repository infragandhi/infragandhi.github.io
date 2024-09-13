import { AlternateSeparator } from '@/components/ui/alternate-separator';
import { useTranslation } from 'react-i18next';

function Personal() {
	const [t] = useTranslation();

	return (
		<>
			<div className="mt-8">
				<h3 className="text-lg font-bold text-xl">{t('content.personal.language-other.title')}</h3>
				<ul className="list-disc ml-4 mt-4">
					<li>{t('content.personal.language-other.language')}</li>
					<li>{t('content.personal.language-other.licence')}</li>
				</ul>
			</div>
			<br />
			<AlternateSeparator className="bg-black dark:bg-white" />
			<br />
			<div>
				<h3 className="text-lg font-bold text-xl">{t('content.personal.hobby.title')}</h3>
				<ul className="list-disc ml-4 mt-4">
					<li>{t('content.personal.hobby.reading')}</li>
					<li>{t('content.personal.hobby.running')}</li>
					<li>{t('content.personal.hobby.hiking')}</li>
				</ul>
			</div>
			<div className="mb-12" />
		</>
	);
}

export default Personal;
