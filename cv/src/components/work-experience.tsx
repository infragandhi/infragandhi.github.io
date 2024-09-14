import { WorkExperienceItemMobile, WorkExperienceItem } from './work-experience-item';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator';
import { WorkExperienceSeparator } from '@/components/ui/work-experience-separator';
import SkillBadge from './skillbadge';

function WorkExperience() {
	const [t] = useTranslation();

	return (
		<>
			<div className='laptop:hidden'>
			<div className="grid grid-cols-1 laptop:grid-cols-3 gap-x-16 gap-y-8 mt-8">
				<div>
					<WorkExperienceItemMobile
						company={t('content.work.miradore.name')}
						status={t('content.work.miradore.title')}
						range={t('content.work.miradore.range')}
						description={t('content.work.miradore.description')}
					/>
					<br />
					<div className="flex flex-row gap-x-4">
						<SkillBadge skill="dotnet" />
						<SkillBadge skill="React" />
						<SkillBadge skill="Azure" />
					</div>
					<br />
					<Separator className="bg-black dark:bg-white" orientation="horizontal" />
				</div>
				<div>
					<WorkExperienceItemMobile
						company={t('content.work.betsson.name')}
						status={t('content.work.betsson.title')}
						range={t('content.work.betsson.range')}
						description={t('content.work.betsson.description')}
					/>
					<br />
					<div className="flex flex-row gap-x-4">
						<SkillBadge skill="dotnet" />
						<SkillBadge skill="Powershell" />
						<SkillBadge skill="T-SQL" />
					</div>
					<br />
					<Separator className="bg-black dark:bg-white" orientation="horizontal" />
				</div>
				<div>
					<WorkExperienceItemMobile
						company={t('content.work.startistica.name')}
						status={t('content.work.startistica.title')}
						range={t('content.work.startistica.range')}
						description={t('content.work.startistica.description')}
					/>
					<br />
					<div className="flex flex-row gap-x-4">
						<SkillBadge skill="dotnet" />
						<SkillBadge skill="Azure" />
						<SkillBadge skill="Powershell" />
					</div>
					<br />
					<Separator className="bg-black dark:bg-white" orientation="horizontal" />
				</div>
				<div>
					<WorkExperienceItemMobile
						company={t('content.work.atos.name')}
						status={t('content.work.atos.title')}
						range={t('content.work.atos.range')}
						status2={t('content.work.atos.title-2')}
						range2={t('content.work.atos.range-2')}
						description={t('content.work.atos.description')}
					/>
					<br />
					<div className="flex flex-row gap-x-2">
						<SkillBadge skill="dotnet" />
						<SkillBadge skill="AWS" />
						<SkillBadge skill="Angular" />
						<SkillBadge skill="SQL" />
					</div>
					<br />
					<Separator className="bg-black dark:bg-white" orientation="horizontal" />
				</div>
				<div>
					<WorkExperienceItemMobile
						company={t('content.work.itron.name')}
						status={t('content.work.itron.title')}
						range={t('content.work.itron.range')}
						description={t('content.work.itron.description')}
					/>
					<br />
					<div className="flex flex-row gap-x-4">
						<SkillBadge skill="dotnet" />
						<SkillBadge skill="Azure" />
						<SkillBadge skill="Angular" />
					</div>
					<br />
					<Separator className="bg-black dark:bg-white" orientation="horizontal" />
				</div>
				<div>
					<WorkExperienceItemMobile
						company={t('content.work.morgan.name')}
						status={t('content.work.morgan.title')}
						range={t('content.work.morgan.range')}
						description={t('content.work.morgan.description')}
					/>
					<br />
					<div className="flex flex-row gap-x-2">
						<SkillBadge skill="dotnet" />
						<SkillBadge skill="Python" />
						<SkillBadge skill="SQL Server" />
					</div>
					<br />
					<Separator className="bg-black dark:bg-white" orientation="horizontal" />
				</div>
				<div>
					<WorkExperienceItemMobile
						company={t('content.work.ottawa.name')}
						status={t('content.work.ottawa.title')}
						range={t('content.work.ottawa.range')}
						description={t('content.work.ottawa.description')}
					/>
					<br />
					<div className="flex flex-row gap-x-2">
						<SkillBadge skill="MS Excel" />
						<SkillBadge skill="MS Word" />
					</div>
					<div className="mb-12" />
				</div>
			</div>
		</div>
		
		<div className='mobile:max-laptop:hidden'>
			<div className="grid grid-cols-1 gap-x-8 gap-y-4 mt-8">
				<div>
					<WorkExperienceItem
						company={t('content.work.miradore.name')}
						status={t('content.work.miradore.title')}
						range={t('content.work.miradore.range')}
						description={t('content.work.miradore.description')}
						skills={['dotnet','React','Azure']}
					/>
					<WorkExperienceSeparator className="bg-black dark:bg-white" />
				</div>
				<div>
					<WorkExperienceItem
						company={t('content.work.betsson.name')}
						status={t('content.work.betsson.title')}
						range={t('content.work.betsson.range')}
						description={t('content.work.betsson.description')}
						skills={['dotnet','Powershell','T-SQL']}
					/>
					<WorkExperienceSeparator className="bg-black dark:bg-white" />
				</div>
				<div>
					<WorkExperienceItem
						company={t('content.work.startistica.name')}
						status={t('content.work.startistica.title')}
						range={t('content.work.startistica.range')}
						description={t('content.work.startistica.description')}
						skills={['dotnet','Powershell','Azure']}
					/>
					<WorkExperienceSeparator className="bg-black dark:bg-white" />
				</div>
				<div>
					<WorkExperienceItem
						company={t('content.work.atos.name')}
						status={t('content.work.atos.title')}
						range={t('content.work.atos.range')}
						status2={t('content.work.atos.title-2')}
						range2={t('content.work.atos.range-2')}
						description={t('content.work.atos.description')}
						skills={['dotnet','AWS','Angular', 'SQL']}
					/>
					<WorkExperienceSeparator className="bg-black dark:bg-white" />
				</div>
				<div>
					<WorkExperienceItem
						company={t('content.work.itron.name')}
						status={t('content.work.itron.title')}
						range={t('content.work.itron.range')}
						description={t('content.work.itron.description')}
						skills={['dotnet','Angular','Azure']}
					/>
					<WorkExperienceSeparator className="bg-black dark:bg-white" />
				</div>
				<div>
					<WorkExperienceItem
						company={t('content.work.morgan.name')}
						status={t('content.work.morgan.title')}
						range={t('content.work.morgan.range')}
						description={t('content.work.morgan.description')}
						skills={['dotnet','Python','SQL Server']}
					/>
					<WorkExperienceSeparator className="bg-black dark:bg-white" />
				</div>
				<div>
					<WorkExperienceItem
						company={t('content.work.ottawa.name')}
						status={t('content.work.ottawa.title')}
						range={t('content.work.ottawa.range')}
						description={t('content.work.ottawa.description')}
						skills={['MS Excel','MS Word']}
					/>
					<div className="mb-12" />
				</div>
			</div>
		</div>
		</>		
	);
}

export default WorkExperience;
