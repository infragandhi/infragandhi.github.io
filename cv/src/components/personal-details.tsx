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

	const constructMailTo = (): string => {
		return `mailto:${decodeString('bnRhbWFzOTUwM0BnbWFpbC5jb20=')}`;
	};

	return (
		<div className="grid grid-cols-1 grid-rows-4 gap-y-1 justify-items-center">
			<p className="text-2xl font-bold">{decodeString(t('personal-details.name'))}</p>
			<p className="text-lg font-semibold">{t('personal-details.title')}</p>
			<p className="text-lg font-medium">{t('personal-details.country')}</p>
			<div className="flew flew-row">
				<Link to={constructMailTo()} target="_blank" rel="noopener noreferrer">
					<Button
						className="bg-blue-600 dark:bg-blue-300 hover:bg-blue-400 hover:dark:hover:bg-blue-600 cursor-pointer mt-2"
						asChild
						size="icon">
						<FontAwesomeIcon icon={faSquareEnvelope} />
					</Button>
				</Link>
				<Link className="ml-8" to={decodeString('aHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vbmFneXRvbWk=')} target="_blank" rel="noopener noreferrer">
					<Button
						className="bg-blue-600 dark:bg-blue-300 hover:bg-blue-400 hover:dark:hover:bg-blue-600 cursor-pointer mt-2"
						asChild
						size="icon">
						<FontAwesomeIcon icon={faLinkedin} />
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default PersonalDetails;
