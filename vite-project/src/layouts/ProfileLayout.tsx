import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function ProfileLayout() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;