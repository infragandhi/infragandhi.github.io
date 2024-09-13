import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
	skill: string;
}

function SkillBadge({ skill }: SkillBadgeProps) {
	return (
		<Badge className="bg-gradient-to-b from-cyan-400 to-sky-400 dark:from-red-900 dark:to-rose-800 text-base text-black dark:text-white">
			{skill}
		</Badge>
	);
}

export default SkillBadge;
