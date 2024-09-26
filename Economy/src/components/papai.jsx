import React, { useState } from 'react';
import Menu from '../components/menu';
import EditarPerfil from '../components/editarPerfil';

export default function App() {
    const [profileImage, setProfileImage] = useState(null);

    return (
        <>
            <Menu profileImage={profileImage} />
            <EditarPerfil setProfileImage={setProfileImage} />
        </>
    );
}