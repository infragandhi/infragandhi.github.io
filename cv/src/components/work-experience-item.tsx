interface WorkExperienceItemProps {
	company: string;
	status: string;
	status2?: string;
	description: string;
}

function WorkExperienceItem({ company, status, status2, description }: WorkExperienceItemProps) {
	return (
		<div>
			<article className="text-wrap">
				<h3 className="text-lg font-bold text-xl">{company}</h3>
				<p className="text-lg font-semibold mt-2">{status}</p>
				{status2 !== undefined && <p className="text-lg font-semibold mt-2">{status2}</p>}
				<br />
				<p className="font-medium mt-2">{description}</p>
			</article>
		</div>
	);
}

export default WorkExperienceItem;
