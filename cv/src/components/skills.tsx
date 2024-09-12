import SkillBadge from './skillbadge';

function Skills() {
	return (
		<div className="grid grid-cols-6 grid-rows-5 gap-2 w-72 mobile:ml-8">
			<div className="col-start-1 row-start-1 col-span-2">
				<SkillBadge skill={'dotnet'} />
			</div>
			<div className="col-start-3 row-start-1 col-span-2">
				<SkillBadge skill={'React'} />
			</div>
			<div className="col-start-5 row-start-1 col-span-2">
				<SkillBadge skill={'T-SQL'} />
			</div>
			<div className="col-start-2 row-start-2 col-span-2">
				<SkillBadge skill={'Azure'} />
			</div>
			<div className="col-start-4 row-start-2 col-span-2">
				<SkillBadge skill={'Angular'} />
			</div>
			<div className="col-start-1 row-start-3 col-span-2">
				<SkillBadge skill={'AWS'} />
			</div>
			<div className="col-start-3 row-start-3 col-span-2 ml-2">
				<SkillBadge skill={'Git'} />
			</div>
			<div className="col-start-5 row-start-3 col-span-2">
				<SkillBadge skill={'SCRUM'} />
			</div>
			<div className="col-start-2 row-start-4 col-span-2">
				<SkillBadge skill={'TDD'} />
			</div>
			<div className="col-start-1 row-start-4 col-span-3">
				<SkillBadge skill={'SQL Server'} />
			</div>
			<div className="col-start-4 row-start-4 col-span-3 ml-4">
				<SkillBadge skill={'Powershell'} />
			</div>
		</div>
	);
}

export default Skills;
