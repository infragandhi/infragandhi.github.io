import SkillBadge from './skillbadge';

interface WorkExperienceItemMobileProps {
	company: string;
	status: string;
	range: string;
	status2?: string;
	range2?: string;
	description: string;
}

interface WorkExperienceItemProps {
	company: string;
	status: string;
	range: string;
	status2?: string;
	range2?: string;
	description: string;
	skills: string[];
}

export function WorkExperienceItemMobile({ company, status, range, status2, range2, description }: WorkExperienceItemMobileProps) {
	return (
		<>
			<article className="text-wrap">
				<h3 className="text-lg font-bold text-xl">{company}</h3>
				<p className="text-lg font-semibold mt-2">{status}</p>
				<p className="text-base font-medium mt-2">{range}</p>
				{status2 !== undefined && <p className="text-lg font-semibold mt-2">{status2}</p>}
				{range2 !== undefined && <p className="text-base font-medium mt-2">{range2}</p>}
				<br />
				<p className="font-medium mt-2">{description}</p>
			</article>
		</>
	);
}

export function WorkExperienceItem({ company, status, range, status2, range2, description, skills }: WorkExperienceItemProps) {
	return (
		<>
			<div className="grid grid-cols-[300px_minmax(300px,500px)_200px] grid-cols-3 grid-rows-5 gap-y-1 gap-x-4">
				<h3 className="col-start-1 row-start-1 text-lg font-bold text-xl">{company}</h3>
				<p className="col-start-1 row-start-2 text-lg font-semibold mt-2">{status}</p>
				<p className="col-start-1 row-start-3 text-base font-medium mt-2">{range}</p>
				{status2 !== undefined && <p className="col-start-1 row-start-4 text-lg font-semibold mt-2">{status2}</p>}
				{range2 !== undefined && <p className="col-start-1 row-start-5 text-base font-medium mt-2">{range2}</p>}
				<br />
				<article className="col-start-2 row-span-5 font-medium mt-2 text-wrap">{description}</article>
				<div className="col-start-3 row-span-5 ml-8">
					<ul>
						{skills.map((skill) => <li className='mt-2'><SkillBadge skill={skill}/></li>)}
					</ul>				
				</div>				
			</div>
			{status2 !== undefined && range2 !== undefined && <br/>}
		</>		
	);
}