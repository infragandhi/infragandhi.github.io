import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';
import WorkExperience from './work-experience';
import Personal from './personal';
import Education from './education';

function Content() {
	const [t] = useTranslation();

	return (
		<div className="mt-12 ml-2 laptop:ml-32 desktop:ml-16">
			<Tabs defaultValue="work" className="w-[360px] laptop:w-[900px] desktop:w-[1400px]">
				<TabsList className="bg-slate-400 dark:bg-slate-600">
					<TabsTrigger className="text-white font-medium" value="work">
						{t('content.tabs.work')}
					</TabsTrigger>
					<TabsTrigger className="text-white font-medium" value="education">
						{t('content.tabs.education')}
					</TabsTrigger>
					<TabsTrigger className="text-white font-medium" value="personal">
						{t('content.tabs.personal')}
					</TabsTrigger>
				</TabsList>
				<TabsContent value="work">
					<WorkExperience />
				</TabsContent>
				<TabsContent value="education">
					<Education />
				</TabsContent>
				<TabsContent value="personal">
					<Personal />
				</TabsContent>
			</Tabs>
		</div>
	);
}

export default Content;
