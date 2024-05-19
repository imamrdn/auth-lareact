import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
            <div className="w-full sm:max-w-xl mt-6 p-5 lg:p-14 bg-white shadow-lg overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
