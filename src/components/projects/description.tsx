import { ReactNode } from 'react';

export default function Description({ children }: { children: ReactNode }) {
    return (
        <p className='bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 bg-clip-text text-transparent font-bold self-start'>
            {children}
        </p>
    );
}
