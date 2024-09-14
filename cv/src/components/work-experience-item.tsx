import SkillBadge from './skillbadge';

interface WorkExperienceItemProps {
	company: string;
	status: string;
	range: string;
	status2?: string;
	range2?: string;
	description: string;
	skills: string[];
}

function WorkExperienceItem({ company, status, range, status2, range2, description, skills }: WorkExperienceItemProps) {
	return (
		<div>
			<article className="text-wrap">
				<h3 className="text-lg font-bold text-xl">{company}</h3>
				<p className="text-lg font-semibold mt-2">{status}</p>
				<p className="text-base font-medium mt-2">{range}</p>
				{status2 !== undefined && <p className="text-lg font-semibold mt-2">{status2}</p>}
				{range2 !== undefined && <p className="text-base font-medium mt-2">{range2}</p>}
				<br />
				<p className="font-medium mt-2">{description}</p>
			</article>
			<br />
			<div className="flex flex-row gap-x-2">
				{skills.map(skill => (
					<SkillBadge skill={skill} />
				))}
			</div>
		</div>
	);
}

export default WorkExperienceItem;
