import React from 'react';
import AdminListTrips from '../components/AdminListTrips/AdminListTrips';
import Header from '../components/HeaderAdmin/HeaderAdmin'

function AdminHomePage() {
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