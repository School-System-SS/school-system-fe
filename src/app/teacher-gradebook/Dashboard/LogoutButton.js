'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogOut = () => {
        localStorage.clear();
        router.push('/');
    }

    return (
        <a onClick={handleLogOut} className="bg-lighter py-2 px-4 rounded text-white lg:mt-0 md:mt-2 lg:w-fit md:w-full max-[640px]:mt-2 max-[640px]:w-full sm:w-full hover:bg-darker hover:cursor-pointer no-underline">
            Logout
    </a>
    );

}
