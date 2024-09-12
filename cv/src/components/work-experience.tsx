import WorkExperienceItem from './work-experience-item';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator';
import SkillBadge from './skillbadge';

function WorkExperience() {
	const [t] = useTranslation();

	return (
		<div className="grid grid-cols-1 laptop:grid-cols-3 gap-16 mt-8">
			<div>
				<WorkExperienceItem
					company={t('content.work.miradore.name')}
					status={t('content.work.miradore.title-date')}
					description={t('content.work.miradore.description')}
				/>
				<br/>
				<div className='flex flex-row gap-x-4'>
					<SkillBadge skill='dotnet'/>
					<SkillBadge skill='React'/>
					<SkillBadge skill='Azure'/>
				</div>
				<br/>
				<Separator className="bg-black dark:bg-white" orientation="horizontal" />
			</div>
			<div>
				<WorkExperienceItem
					company={t('content.work.betsson.name')}
					status={t('content.work.betsson.title-date')}
					description={t('content.work.betsson.description')}
				/>
				<br/>
				<div className='flex flex-row gap-x-4'>
					<SkillBadge skill='dotnet'/>
					<SkillBadge skill='Powershell'/>
					<SkillBadge skill='T-SQL'/>
				</div>
				<br/>
				<Separator className="bg-black dark:bg-white" orientation="horizontal" />
			</div>
			<div>
				<WorkExperienceItem
					company={t('content.work.startistica.name')}
					status={t('content.work.startistica.title-date')}
					description={t('content.work.startistica.description')}
				/>
				<br/>
				<div className='flex flex-row gap-x-4'>
					<SkillBadge skill='dotnet'/>
					<SkillBadge skill='Azure'/>
					<SkillBadge skill='Powershell'/>
				</div>
				<br/>
				<Separator className="bg-black dark:bg-white" orientation="horizontal" />
			</div>
			<div>
				<WorkExperienceItem
					company={t('content.work.atos.name')}
					status={t('content.work.atos.title-date')}
					status2={t('content.work.atos.title-date-2')}
					description={t('content.work.atos.description')}
				/>
				<br/>
				<div className='flex flex-row gap-x-2'>
					<SkillBadge skill='dotnet'/>
					<SkillBadge skill='AWS'/>
					<SkillBadge skill='Angular'/>
					<SkillBadge skill='SQL'/>
				</div>
				<br/>
				<Separator className="bg-black dark:bg-white" orientation="horizontal" />
			</div>
			<div>
				<WorkExperienceItem
					company={t('content.work.itron.name')}
					status={t('content.work.itron.title-date')}
					description={t('content.work.itron.description')}
				/>
				<br/>
				<div className='flex flex-row gap-x-4'>
					<SkillBadge skill='dotnet'/>
					<SkillBadge skill='Azure'/>
					<SkillBadge skill='Angular'/>
				</div>
				<br/>
				<Separator className="bg-black dark:bg-white" orientation="horizontal" />
			</div>
			<div>
				<WorkExperienceItem
					company={t('content.work.morgan.name')}
					status={t('content.work.morgan.title-date')}
					description={t('content.work.morgan.description')}
				/>
				<br/>
				<div className='flex flex-row gap-x-2'>
					<SkillBadge skill='dotnet'/>
					<SkillBadge skill='Python'/>
					<SkillBadge skill='SQL Server'/>
				</div>
				<br/>
				<Separator className="bg-black dark:bg-white" orientation="horizontal" />
			</div>
			<div>
				<WorkExperienceItem
					company={t('content.work.ottawa.name')}
					status={t('content.work.ottawa.title-date')}
					description={t('content.work.ottawa.description')}
				/>
				<br/>
				<div className='flex flex-row gap-x-2'>
					<SkillBadge skill='MS Excel'/>
					<SkillBadge skill='MS Word'/>
				</div>
				<div className='mb-12'/>
			</div>			
		</div>
	);
}

export default WorkExperience;
