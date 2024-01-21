import Profile from '@/components/themplate/community/Profile';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'User Profile',
    description: 'User Pofile',
    };
const ProfilePage = () => {
    return (
        <div>
            <Profile />
        </div>
    );
};

export default ProfilePage;