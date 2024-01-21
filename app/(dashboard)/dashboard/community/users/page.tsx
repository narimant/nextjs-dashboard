import UsersList from '@/components/themplate/community/UsersList';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'User List ',
    description: 'User List page',
    };
const UsersListPage = () => {
    return (
        <div>
            <UsersList />
        </div>
    );
};

export default UsersListPage;