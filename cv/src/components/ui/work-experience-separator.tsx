import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

const WorkExperienceSeparator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, decorative = true, ...props }, ref) => (
	<SeparatorPrimitive.Root
		ref={ref}
		decorative={decorative}
		orientation="horizontal"
		className={cn('shrink-0 bg-border', 'h-[1px] w-[1000px]', className)}
		{...props}
	/>
));
WorkExperienceSeparator.displayName = SeparatorPrimitive.Root.displayName;

export { WorkExperienceSeparator };
