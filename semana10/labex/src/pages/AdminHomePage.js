import React from 'react';
import AdminListTrips from '../components/AdminListTrips/AdminListTrips';
import Header from '../components/HeaderAdmin/HeaderAdmin'
import useProtectedPage from '../hooks/useProtectedPage';

function AdminHomePage() {
    useProtectedPage()

    return (
        <div>
            <Header />
            <AdminListTrips />
            <AdminListTrips />
            <AdminListTrips />
            <AdminListTrips />
        </div>
    );
}

export default AdminHomePage;