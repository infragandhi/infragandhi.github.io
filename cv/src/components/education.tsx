import { AlternateSeparator } from '@/components/ui/alternate-separator';
import { useTranslation } from 'react-i18next';

function Education() {
	const [t] = useTranslation();
	return (
		<>
			<div className="mt-8">
				<article className="text-wrap">
					<h3 className="text-lg font-bold text-xl">{t('content.personal.education.university.name')}</h3>
					<p className="text-lg font-semibold mt-2">{t('content.personal.education.university.faculty')}</p>
					<p className="mt-4 font-medium">{t('content.personal.education.university.course')}</p>
					<p className="mt-4">2016-2020</p>
				</article>
			</div>
			<br />
			<AlternateSeparator className="bg-black dark:bg-white" />
			<br />
			<div>
				<article className="text-wrap">
					<h3 className="text-lg font-bold text-xl">{t('content.personal.education.secondary-school.name')}</h3>
					<p className="text-lg font-semibold mt-2">{t('content.personal.education.secondary-school.course')}</p>
					<p className="mt-4">2010-2014</p>
				</article>
			</div>
			<div className="mb-12" />
		</>
	);
}

export default Education;
