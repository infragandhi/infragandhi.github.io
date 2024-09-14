import { Link } from 'react-router-dom';
import { decode as decode64 } from 'base-64';
import { decode as decodeUtf8 } from 'utf8';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function PersonalDetails() {
	const [t] = useTranslation();

	const decodeString = (toDecode: string): string => {
		const bytes = decode64(toDecode);
		return decodeUtf8(bytes);
	};

	const getMailTo = (): string => {
		return `mailto:${decodeString('bnRhbWFzOTUwM0BnbWFpbC5jb20=')}`;
	};

	return (
		<div className="grid grid-cols-5 grid-rows-5 gap-y-1">
			<p className="text-2xl font-bold col-span-5">{decodeString(t('personal-details.name'))}</p>
			<p className="text-lg font-semibold col-span-5">{t('personal-details.title')}</p>
			<p className="text-lg font-medium col-span-5">
				{t('personal-details.country')} 
			</p>
			<Link to={getMailTo()}>
				<Button
					className="col-start-1 bg-blue-600 dark:bg-blue-600 hover:bg-blue-400 hover:dark:hover:bg-blue-300 cursor-pointer laptop:mt-4 qhd:mt-2"
					asChild
					size='icon'>
					<FontAwesomeIcon icon={faSquareEnvelope} />
				</Button>
			</Link>
			<Link to={decodeString('aHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vbmFneXRvbWk=')} target="_blank" rel="noopener noreferrer">
				<Button
					className="col-start-2 bg-blue-600 dark:bg-blue-600 hover:bg-blue-400 hover:dark:hover:bg-blue-300 cursor-pointer laptop:mt-4 qhd:mt-2"
					asChild
					size="icon">
					<FontAwesomeIcon icon={faLinkedin} />
				</Button>
			</Link>			
		</div>
	);
}

export default PersonalDetails;
