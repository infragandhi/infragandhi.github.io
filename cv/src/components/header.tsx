import PersonalDetails from './personal-details';
import ProfilePicture from './profile-picture';
import Skills from './skills';

function Header() {
	return (
		<div className="grid grid-col-1 justify-items-center mt-4 laptop:mt-8">
			<div className="mt-16">
				<ProfilePicture />
			</div>
			<div className="mt-16">
				<PersonalDetails />
			</div>
			<div className="mt-16">
				<Skills />
			</div>
		</div>
	);
}

export default Header;
