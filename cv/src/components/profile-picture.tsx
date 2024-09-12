import Profile from '/me.svg';
import { useTranslation } from 'react-i18next';

function ProfilePicture() {
	const [t] = useTranslation();

	return <img className="rounded-full w-64 h-64" src={Profile} alt={t('profile-picture-alt')} />;
}

export default ProfilePicture;
