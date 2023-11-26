import React from 'react'
import Dashboard from './icons/Dashboard'
import Notes from './icons/Notes'
import Videos from './icons/Videos'
import Class from './icons/Class'
import Subject from './icons/Subject'

const array = [
    {
        name: 'Dashboard',
        
        active: true,
        icon: <Dashboard/>,
    },
    {
        name: 'Notes',
        icon: <Notes />,
        active: false
    },
    {
        name: 'Videos',
        icon: <Videos/>,
        active: false
    },
    {
        name: 'Class',
        icon: <Class/>,
        active: false
    },
    {
        name: 'Subject',
        icon: <Subject/>,
        active: false
    },
    {
        name: 'Term',
        icon: <Dashboard/>,
        active: false
    },
]

export default array