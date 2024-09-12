import PersonalDetails from './personal-details';
import ProfilePicture from './profile-picture';
import Skills from './skills';

function Header() {
	return (
		<div className="ml-2 mt-4 laptop:desktop:ml-8 laptop:mt-8 desktop:mt-16 qhd:ml-16">
			<div className="ml-8 mt-16 laptop:desktop:ml-4">
				<ProfilePicture />
			</div>
			<div className="ml-4 mt-16">
				<PersonalDetails />
			</div>
			<div className="mt-4 mobile:ml-2">
				<Skills />
			</div>
		</div>
	);
}

export default Header;
