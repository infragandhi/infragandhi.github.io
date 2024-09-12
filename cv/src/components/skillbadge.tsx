import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
	skill: string;
}

function SkillBadge({ skill }: SkillBadgeProps) {
	return <Badge className="bg-sky-500 dark:bg-amber-300 text-base">{skill}</Badge>;
}

export default SkillBadge;
