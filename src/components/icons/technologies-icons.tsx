import { Icon } from '@iconify/react';
import { technologies } from '@/data/technologies';

export default function TechnologiesImg() {
    return (
        <div className='flex gap-3'>
            {technologies.map((tech, index) => (
                <Icon
                    key={index}
                    icon={tech.icon}
                    className='text-2xl'
                    aria-label={tech.name}
                />
            ))}
        </div>
    );
}
