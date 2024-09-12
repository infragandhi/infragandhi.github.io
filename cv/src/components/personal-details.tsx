import { decode as decode64 } from 'base-64';
import { decode as decodeUtf8 } from 'utf8';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function PersonalDetails() {
	const [t] = useTranslation();

	const decodeString = (toDecode: string): string => {
		const bytes = decode64(toDecode);
		return decodeUtf8(bytes);
	};

	const navigateToLinkedIn = () => {
		const url = decodeString('aHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vbmFneXRvbWk=');
		window.open(url, '_blank');
	};

	const getMailTo = (): string => {
		return `mailto:${decodeString('bnRhbWFzOTUwM0BnbWFpbC5jb20=')}`;
	};

	return (
		<div className="grid grid-cols-1 grid-rows-5 gap-y-1">
			<p className="text-2xl font-bold">{decodeString(t('personal-details.name'))}</p>
			<p className="text-lg font-semibold">{t('personal-details.title')}</p>
			<p className="text-lg font-medium">
				<a className="text-blue-600 dark:text-blue-300 hover:underline" href={getMailTo()}>
					{decodeString('bnRhbWFzOTUwM0BnbWFpbC5jb20=')}
				</a>{' '}
				| {t('personal-details.country')}
			</p>
			<Button
				className="bg-blue-600 dark:bg-blue-600 hover:bg-blue-300 hover:dark:hover:bg-blue-300 cursor-pointer laptop:mt-4 qhd:mt-2"
				asChild
				size="icon"
				onClick={navigateToLinkedIn}>
				<FontAwesomeIcon icon={faLinkedin} />
			</Button>
		</div>
	);
}

export default PersonalDetails;
